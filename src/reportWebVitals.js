/*
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2021-03-12 01:37:45
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-12 01:52:46
 */
const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
