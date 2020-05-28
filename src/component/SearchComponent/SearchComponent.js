import React, { useState } from "react";
import {
  Row,
  Col,
  Input,
  Button
} from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import SongGrid from '../SongGrid/SongGrid';

const { Search } = Input;

const SearchComponent = () => {
   const state = useSelector((state) => state);
   const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    dispatch({ type: "FETCH_SONGS", payload: search });

    setTimeout(() => {
      setSearch("");
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Row style={{ float: "center" }}>
        <Col offset={4} lg={8}>
          <Input
            placeholder="Search Artist"
            onChange={(e) => setSearch(e.target.value)}
            prefix={<SearchOutlined />}
            size="large"
          />
        </Col>
        <Col lg={8}>
          <Button
            size="large"
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row span={24}>
        <SongGrid
          result={
            !state.song.songList.results ? [] : state.song.songList.results
          }
          loading={loading}
        />
      </Row>
    </>
  );
};

export default SearchComponent;
