interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Ylin',
  siteUrl: 'https://ylinwind.run',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Ylinwind Running Page',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/ylinwind',
    },
    {
      name: 'About',
      url: 'https://github.com/ylinwind/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
