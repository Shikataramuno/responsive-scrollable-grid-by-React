import React, { Component } from 'react';
import {Row, Col, Form, ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MemberList.css';

export class MemberList extends Component {

  constructor(props) {
    // super(...arguments);
    super(props);
    this.state = {
      columns: ['id', 'name', 'admin', 'address', 'progress'],
      members: [],
      sortOrders: {},
      sortKey: ""
    }
   }

  filter = (e) => {
    const filter = e.target.value;
    let members = this.memberList;
    members = members.filter((member) => {
      return Object.keys(member).some((key) => {
        return String(member[key]).indexOf(filter) > -1;
      });
    });
    this.setState({members: members})
  }
  sortBy = (name) => {
    let sortOrders = this.state.sortOrders
    sortOrders[name] = sortOrders[name] * -1;
    let members = this.state.members;
    members = members.slice().sort((a,b) => {
      a = a[name]
      b = b[name]
      return (a === b ? 0 : a > b ? 1 : -1) * sortOrders[name];
    });
    this.setState({sortKey: name});
    this.setState({sortOrders: sortOrders});
    this.setState({members: members})

  }
  handleAdminChanged = (member) => {
    console.log(member);
    let list = this.state.members;
    const target = list.find(rec => {
      return rec.id === member.id
    })
    target.admin = !target.admin;
    this.setState({members: list})
  }

  dhead = (props) => {
    return (
      <div className="pc table-row header">
        <Row>
          <Form.Label className="title" >メンバ一覧 </Form.Label>
        </Row>
        <Row className='query-box'>
          <Col xs={2}>
            <Form.Control as="input"
              type="text"
              id="search"
              className="filter"
              placeholder="フィルタ文字列"
              onChange={this.filter}/>
          </Col>
          <Col xs={10}>
          </Col>
        </Row>
        <div className="wrapper attributes header">
          {
            props.columns.map((name,col) => {
              const className = props.sortKey === name ? "active " + name : name
              const arrow =
              props.sortKey === name ? 
                (props.sortOrders[name] > 0? <span className={"arrow asc"}></span> : <span className="arrow dsc"></span>) :
                "";
              return (
                <div className={className}
                  key={col}
                  onClick={() => this.sortBy(name)}>
                  {name}
                  {arrow}
                </div>
              )
            })
          }
        </div>
      </div>
    );   
  }
  dlist = (props) => {
    return (
      <div className="data-field">
        {
          props.members.map((member, row) => {
            return (
             <div className="table-row wrapper attributes data" key={row}>{
                props.columns.map((name,idx) => {
                  if(name === "admin") {
                    return (
                      <div className={name} key={idx}>
                        <Form.Check
                          type="checkbox"
                          variant="success"
                          checked={member[name]}
                          onChange={() => this.handleAdminChanged(member)}
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
  list = () => {
    return (
      <div className="container-fluid">
        <this.dhead
          columns={this.state.columns}
          sortKey={this.state.sortKey}
          sortOrders={this.state.sortOrders}
        />
        <this.dlist
          members={this.state.members}
          columns={this.state.columns}/>
      </div>
    );
  }
  render () {
    return <this.list/>
  }
  componentDidMount () {
    let orders = {}
    this.state.columns.forEach((key) => {
      orders[key] = 1;
    })
    this.memberList = [
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
    ];
    this.setState({sortOrders: orders}); 
    this.setState({members: this.memberList});
  }
}
  