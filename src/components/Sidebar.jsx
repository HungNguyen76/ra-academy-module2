import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  PlusSquareOutlined,
  FormOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import ReactIcon from "./icons/ReactIcon";

const menuItems = [
  {
    key: "Homepage",
    icon: <HomeOutlined />,
    label: "Rikkei Academy",
    link: "/",
  },
  {
    key: "Hooks",
    icon: <PlusSquareOutlined />,
    label: "Hooks",
    link: "/hooks",
    submenu: [
      {
        key: "useState",
        icon: <ReactIcon />,
        label: "UseState",
        link: "/hooks/useState",
      },
      {
        key: "useEffect",
        icon: <ReactIcon />,
        label: "UseEffect",
        link: "/hooks/useEffect",
      },
      {
        key: "useReducer",
        icon: <ReactIcon />,
        label: "UseReducer",
        link: "/hooks/useReducer",
      },
      {
        key: "useMemo",
        icon: <ReactIcon />,
        label: "UseMemo",
        link: "/hooks/useMemo",
      },
      {
        key: "useCallback",
        icon: <ReactIcon />,
        label: "UseCallback",
        link: "/hooks/useCallback",
      },
      {
        key: "useContext",
        icon: <ReactIcon />,
        label: "UseContext",
        link: "/hooks/useContext",
      },
      {
        key: "useRef",
        icon: <ReactIcon />,
        label: "UseRef",
        link: "/hooks/useRef",
      },
    ],
  },
  {
    key: "Practice",
    icon: <FormOutlined />,
    label: "Practice",
    link: "/practice",
    submenu: [
      {
        key: "session2",
        icon: <SmileOutlined />,
        label: "Session2",
        link: "/practice2/flipCoin",
      },
      {
        key: "session3",
        icon: <SmileOutlined />,
        label: "Session3",
        link: "/practice3/todoList",
      },
    ],
  },
];
const renderMenuItems = (items) =>
  items.map((item) => {
    if (item.submenu) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {renderMenuItems(item.submenu)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={item.link}>{item.label}</Link>
      </Menu.Item>
    );
  });
const { Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={200}
      className="site-layout-background"
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["students"]}>
        {renderMenuItems(menuItems)}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
