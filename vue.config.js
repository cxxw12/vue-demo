module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        },
				proxy: {
					'/api': {
						target: "http://localhost:3000",
						changeOrigin: true,
						ws: true,
						pathRewrite: {
							"^/api": ""
						}
					}
				}
    }
}