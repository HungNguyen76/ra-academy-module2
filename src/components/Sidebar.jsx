import React, { useState } from "react";
import { Layout, Menu} from "antd";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  Html5Filled,
  CodeFilled,
  SmileOutlined,
  EditFilled,
  TagFilled
} from "@ant-design/icons";


const menuItems = [
  {
    key: "Homepage",
    icon: <HomeFilled />,
    label: "Rikkei Academy",
    link: "/",
  },
  {
    key: "Hooks",
    icon: <Html5Filled />,
    label: "Hooks",
    link: "/hooks",
    submenu: [
      {
        key: "useState",
        icon: <TagFilled />,
        label: "UseState",
        link: "/hooks/useState",
      },
      {
        key: "useEffect",
        icon: <TagFilled />,
        label: "UseEffect",
        link: "/hooks/useEffect",
      },
      {
        key: "useReducer",
        icon: <TagFilled />,
        label: "UseReducer",
        link: "/hooks/useReducer",
      },
      {
        key: "useMemo",
        icon: <TagFilled />,
        label: "UseMemo",
        link: "/hooks/useMemo",
      },
      {
        key: "useCallback",
        icon: <TagFilled />,
        label: "UseCallback",
        link: "/hooks/useCallback",
      },
      {
        key: "useContext",
        icon: <TagFilled />,
        label: "UseContext",
        link: "/hooks/useContext",
      },
      {
        key: "useRef",
        icon: <TagFilled />,
        label: "UseRef",
        link: "/hooks/useRef",
      },
    ],
  },
  {
    key: "Practice",
    icon: <CodeFilled />,
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
  {
    key: " Note",
    icon: <EditFilled />,
    label: "Note",
    link: "/note",
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
