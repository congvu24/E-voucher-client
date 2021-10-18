module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: "less-loader",
        options: {
          lessOptions: {
            modifyVars: {
              "primary-color": "#1DA57A",
              "link-color": "#1DA57A",
              "border-radius-base": "2px",
            },
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
};
