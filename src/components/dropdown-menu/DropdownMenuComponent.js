import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

const items = [
  {
    key: "1",
    label: "All",
  },
  {
    key: "2",
    label: "Movies",
  },
  {
    key: "3",
    label: "Tv Shows",
  },
];

const DropdownMenu = () => {
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ["1"],
      }}
    >
      <Typography.Link>
        <Space>
          Categories
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default DropdownMenu;
