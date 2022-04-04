// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    // created() {
    //     let url = 'http://cms-bucket.ws.126.net/2021/0114/003bc5dej00qmxg5o0089c000s600e3c.jpg'
    //     //调用图片转换base64的方法
    //     this.getBase64Image(url)
    // },
    // methods: {
    //     getBase64Image(url) {
    //         var _this = this
    //         var image = new Image()
    //         image.src = url + '?v=' + Math.random() // 处理缓存
    //         image.crossOrigin = '*' // 支持跨域图片
    //         image.onload = () => {
    //             var canvas = document.createElement('canvas')
    //             canvas.width = image.width
    //             canvas.height = image.height
    //             var context = canvas.getContext('2d')
    //             context.drawImage(image, 0, 0, image.width, image.height)
    //             var quality = 0.8
    //             let dataurl = canvas.toDataURL('image/jpeg', quality)
    //             _this.url = dataurl
    //             console.log(_this.url)
    //         }
    //     }
    // },
    install(Vue) {
        Vue.prototype.getPdf = function () {
            var title = "test"  //DPF标题

            html2Canvas(document.querySelector('#pdfDom'), {
                // allowTaint: true,
                // taintTest: false,
                useCORS: true,
                //width:960,
                //height:5072,
                dpi: window.devicePixelRatio * 4, //将分辨率提高到特定的DPI 提高四倍
                scale: 4 //按比例增加分辨率
            }).then(function (canvas) {
                    let contentWidth = canvas.width
                    let contentHeight = canvas.height
                    let pageHeight = contentWidth / 592.28 * 841.89
                    let leftHeight = contentHeight
                    let position = 0
                    let imgWidth = 595.28
                    let imgHeight = 592.28 / contentWidth * contentHeight
                    let pageData = canvas.toDataURL('image/jpeg', 1.0)
                    let PDF = new JsPDF('', 'pt', 'a4')
                    if (leftHeight < pageHeight) {
                        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                    } else {
                        while (leftHeight > 0) {
                            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight
                            position -= 841.89
                            if (leftHeight > 0) {
                                PDF.addPage()
                            }
                        }
                    }
                    PDF.save(title + '.pdf')
                }
            )
        }
    }
}

