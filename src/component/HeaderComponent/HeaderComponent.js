import React, {useEffect} from "react";
import { Layout, Row, Col } from "antd";

import SearchComponent from "../../component/SearchComponent/SearchComponent";
import Logo from '../Logo/Logo';
import * as api from "../../redux/sagas/api"; 
import { useSelector, useDispatch } from "react-redux";


const { Header } = Layout;

const HeaderComponent = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "FETCH_SONGS"})
  }, [])
  // console.log('state', state);

  const loadSongs = () => [
    dispatch({type: "FETCH_SONGS"})
  ]

  // const clearSongs= () => {
  //   dispatch({type: "CLEAR_SONGS"})
  // }

  return (
        <Header>
          <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={1} onClick={loadSongs} style={{cursor: 'pointer'}}>
              <Logo />
            </Col>
            <Col className="gutter-row" span={23}>
              <SearchComponent />
            </Col>
          </Row>
        </Header>
  );
};

export default HeaderComponent;

