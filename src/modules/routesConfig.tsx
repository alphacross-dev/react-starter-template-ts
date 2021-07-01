export interface NavItemProps {
  id: string;
  messageId: string;
  title: string;
  icon?: string;
  exact?: boolean;
  url?: string;
  type?: string;
  count?: number;
  color?: string;
  auth?: string[];
  children?: NavItemProps[] | NavItemProps;
}

const routesConfig: NavItemProps[] = [
  /*
  {
    id: 'sample',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'page-1',
        title: 'Page -1',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        url: '/sample/page-1',
      },
      {
        id: 'page-2',
        title: 'Page -2',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        url: '/sample/page-2',
      },
    ],
  },
*/
  {
    id: 'schedule',
    title: 'Schedule',
    messageId: 'sidebar.schedule',
    type: 'group',
    //type: 'collapse',
    //icon: 'insert_chart',
    children: [
      {
        id: 'todo',
        title: 'todo',
        messageId: 'sidebar.schedule.todo',
        type: 'item',
        icon: 'insert_chart',
        url: '/schedule/todo',
      },
    ],
  },
];
export default routesConfig;
