module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-mura",
      options: {
        maxItems: "9999",
        itemsperpage: "9999",
        fields: "body,summary,title,menutitle,contentid,subtype,type,filename,urltitle,display,assocfilename,links,images",
      },
    },
  ],
};