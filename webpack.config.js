


module.exports = {
    context:__dirname + '/src',
    entry:{
       bundle:'./js/index.js'
    },
    output:{
        path:__dirname + '/bundle',
        filename:'[name].js',
        publicPath:"/assets"
    },
    //服务器
    devServer:{
        contentBase:__dirname,
    },
    module:{
        rules:[
            {
                test:/\.js$|.jsx$/,
                use:[{
                    loader:"babel-loader",
                    options:{presets:['react',"es2015"]}
                }]
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    }
    
}