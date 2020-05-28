import React from "react";
import { Col, Card, Tag, Skeleton, Empty, Avatar } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

const SongGrid = ({ result, loading }) => {

  return (
    <>
      {result.length === 0 ? (
        <Col lg={20} style={{ padding: "12px" }}>
          <Empty />
        </Col>
      ) : (
        result.map((item) => {
          return (
            <Col
              lg={6}
              md={8}
              sm={12}
              style={{ padding: "8px" }}
              key={item.trackId}
            >
              <Card
                style={{ width: "100%", marginTop: 16 }}
                actions={[
                  <a target="_blank" href={`${item.collectionViewUrl}`}>
                    <PlayCircleOutlined />
                  </a>,
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={<Avatar size={64} src={item.artworkUrl100} />}
                    description={item.artistName}
                    title={item.trackName}
                  />
                  <Col offset={7} lg={6} style={{ padding: "5px" }}>
                    {item.trackExplicitness === "explicit" ? (
                      <Tag color="red">Explicit</Tag>
                    ) : (
                      <Tag color="green">Not Explicit</Tag>
                    )}
                  </Col>
                  <Col offset={7} lg={6} style={{ padding: "5px" }}>
                    <Tag>{item.primaryGenreName}</Tag>
                  </Col>
                </Skeleton>
              </Card>
            </Col>
          );
        })
      )}
    </>
  );
};

export default SongGrid;
