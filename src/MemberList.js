import React, { Component } from 'react';
import {Form, ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MemberList.css';

export class MemberList extends Component {

  constructor(props) {
    // super(...arguments);
    super(props);
    this.state = {
      columns: ['id', 'name', 'admin', 'address', 'progress'],
      memberList: [
        {id: 1, name: 'aaaa', admin: true, progress: 10, address: 'aaaa@shikataramuno.com'},
        {id: 2, name: 'bbbb', admin: true, progress: 20, address: 'bbbb@shikataramuno.com'},
        {id: 3, name: 'cccc', admin: false, progress: 30, address: 'cccc@shikataramuno.com'},
        {id: 4, name: 'dddd', admin: false, progress: 40, address: 'dddd@shikataramuno.com'},
        {id: 5, name: 'eeee', admin: false, progress: 50, address: 'eeee@shikataramuno.com'},
        {id: 6, name: 'ffff', admin: false, progress: 60, address: 'ffff@shikataramuno.com'},
        {id: 7, name: 'gggg', admin: false, progress: 70, address: 'gggg@shikataramuno.com'},
        {id: 8, name: 'hhhh', admin: false, progress: 80, address: 'hhhh@shikataramuno.com'},
        {id: 9, name: 'iiii', admin: false, progress: 90, address: 'iiii@shikataramuno.com'},
        {id: 10, name: 'jjjj', admin: false, progress: 11, address: 'jjjj@shikataramuno.com'},
        {id: 11, name: 'kkkk', admin: false, progress: 22, address: 'kkkk@shikataramuno.com'},
        {id: 12, name: 'llll', admin: false, progress: 33, address: 'llll@shikataramuno.com'},
        {id: 13, name: 'mmmm', admin: false, progress: 44, address: 'mmmm@shikataramuno.com'},
        {id: 14, name: 'nnnn', admin: false, progress: 55, address: 'nnnn@shikataramuno.com'},
        {id: 15, name: 'oooo', admin: false, progress: 66, address: 'oooo@shikataramuno.com'},
        {id: 16, name: 'pppp', admin: false, progress: 77, address: 'pppp@shikataramuno.com'},
        {id: 17, name: 'qqqq', admin: false, progress: 88, address: 'qqqq@shikataramuno.com'},
        {id: 18, name: 'rrrr', admin: false, progress: 99, address: 'rrrr@shikataramuno.com'},
        {id: 19, name: 'ssss', admin: false, progress: 10, address: 'ssss@shikataramuno.com'},
        {id: 20, name: 'tttt', admin: false, progress: 20, address: 'tttt@shikataramuno.com'},
        {id: 21, name: 'uuuu', admin: false, progress: 30, address: 'uuuu@shikataramuno.com'},
        {id: 22, name: 'vvvv', admin: false, progress: 40, address: 'vvvv@shikataramuno.com'},
        {id: 23, name: 'wwww', admin: false, progress: 50, address: 'wwww@shikataramuno.com'},
        {id: 24, name: 'xxxx', admin: false, progress: 60, address: 'xxxx@shikataramuno.com'},
        {id: 25, name: 'yyyy', admin: false, progress: 70, address: 'yyyy@shikataramuno.com'},
        {id: 26, name: 'zzzz', admin: true, progress: 80, address: 'zzzz@shikataramuno.com'}
      ]
    }
  }

  handleChanged = (member, e) => {
    console.log(member);
    let list = this.state.memberList;
    const target = list.find(rec => {
      return rec.id === member.id
    })
    target.admin = !target.admin;
    this.setState({memberList: list})
  }

  list = () => {
    return (
      <div className="data-field">
        {
          this.state.memberList.map((member, row) => {
            return (
             <div className="table-row wrapper attributes data" key={row}>{
                this.state.columns.map((name,idx) => {
                  if(name === "admin") {
                    return (
                      <div className={name} key={idx}>
                        <Form.Check
                          type="checkbox"
                          variant="success"
                          checked={member[name]}
                          onChange={this.handleChanged.bind(this, member)}
                        />
                      </div>
                    )
                  } else if(name === "progress") {
                    return (
                      <div className={name} key={idx}>
                        <ProgressBar
                          variant="success" 
                          now={member[name]}
                          label={`${member[name]}%`}
                        />
                      </div>
                    )
                  } else {
                    return (
                      <div className={name} key={idx}>
                        {member[name]}
                      </div>
                    )
                  }
                })
              }</div>
            );
          })
        }
      </div>
    );
  }

  flist(props) {
    return (
      <div className="data-field">
        {
          props.memberList.map((member, row) => {
            return (
             <div className="table-row wrapper attributes data" key={row}>{
                props.columns.map((name,idx) => {
                  if(name === "admin") {
                    return (
                      <div className={name} key={idx}>
                        <Form.Check type="checkbox" variant="success" checked={member[name]} onChange={props.handleChanged.bind(this, member)}/>
                      </div>
                    )
                  } else if(name === "progress") {
                    return (
                      <div className={name} key={idx}>
                        <ProgressBar variant="success" now={member[name]} label={`${member[name]}%`} />
                      </div>
                    )
                  } else {
                    return (
                      <div className={name} key={idx}>
                        {member[name]}
                      </div>
                    )
                  }
                }, this)
              }</div>
            );
          }, this)
        }
      </div>
    );
  }
  render () {
    // return this.list();
    return <this.flist memberList={this.state.memberList} columns={this.state.columns} handleChanged={this.handleChanged}/>
  }
}
  