var themeConfig = {
    dark: {
        index: 1,
        headerBg: "#1b296f",
        mainBgColor: "none",
        mainBgLinearGradient: "linear-gradient(45deg,#20234f, #141a36)",
        mainBodyBgColor: "#2f3871",
        mainBodyBgImage: "url(../images/dark/dark-icon-all.png)",
        mainBodyColor: "#fff",
        fff333: "#fff",
        mainBodyInfoBoxBg: "#2a3465",
        mainBodyInfoBoxKeyColor: "#b1c8fe",
        mainBodyInfoBoxTitleBg: "#292f68",
        mainBodyInfoBoxTitleBorderBottomColor: "#434b8b",
        mainBodyInfoBoxBorderColor: "#434b8b",
        mainBodyTopSelectWrapSelectBg: "#2c346a",
        mainBodyTopSelectWrapIBg: "#2c346a",
        mainBodyTopSelectWrapSelectColor: "#fff",
        chart: {
            textColor: '#fff',
            axisLabelColor: "#fff"
        },
        mainKeshihuaMainSearchWrapS1: "#838fa9",
        mainKeshihuaMainSearchWrapInputColor: "#fff",
        mainKeshihuaMainSearchWrapInputBg: "#2c346a",
        uipagesortColor: "#838fa9",
        uipageSortInputTextBg: "#1f2853",
        uipageSortInputTextBorderColor: "#353f7d",
        mainKeshihuaMainSearchWrapInputBorderColor: "#4b5a79",
        mainBodyInfoBoxTitleS2: "#09f0f4",
        mainBodyInfoBoxUlWrapLiS1I: "#5365cd",
        mainBodyEchartsWrapBgImage: "url(../images/dark/right-bottom-pic.png)",
        mainBodyInfoBoxTitleIconBgImage: "url(../images/dark/dark-icon-all.png)",
        mainBodyInfoBoxTitleIconBg: "#18649a",
        mainKeshihuaMainSearchWrapTimewrapIcon: "url(../images/dark/dark-icon-all.png)",
        keshihuaTableTbodyTrOddBg: "#23285a",
        keshihuaTableTbodyTrEvenBg: "#1d2751",
        keshihuaTableTbodyTdColor: "#b1c8fe",
        keshihuaTableTheadTrImage: "linear-gradient(0deg, #323a7b, #323a7a)",
        keshihuaTableBorderColor: "#505ba1",
        keshihuaTableThColor: "#8b9df9",
        keshihuaTableTdFinishedColor: "#09f0f4",
        mainKeshihuamainsearchwrapsearchbtnBgImage: "linear-gradient(0deg, #02b09a, #08a1aa)",
        keshihuaTableHandleLook: "#00c1a9",
        keshihuaTableHandleDel: "#77829e",
        keshihuatableChecked: 'url(../images/dark/dark-icon-all.png)',
        keshihuaTableHandlePretreatment: "#3f97f1"
    },
    white: {
        index: 2,
        headerBg: "#254b9e",
        mainBgColor: "#e0e2e4",
        mainBgLinearGradient: "none",
        mainBodyBgColor: "#fff",
        mainBodyBgImage: "url(../images/white/white-icon-all.png)",
        mainBodyColor: "#000",
        fff333: "#333",
        mainBodyInfoBoxBg: "#f3f6f8",
        mainBodyInfoBoxKeyColor: "#646464",
        mainBodyInfoBoxTitleBg: "#f3f6f8",
        mainBodyInfoBoxTitleBorderBottomColor: "#f3f6f8",
        mainBodyInfoBoxBorderColor: "#c9ccd6",
        mainBodyTopSelectWrapSelectBg: "transparent",
        mainBodyTopSelectWrapIBg: "#fff",
        mainBodyTopSelectWrapSelectColor: "#000",
        chart: {
            textColor: '#333',
            axisLabelColor: "#7a7a7a"
        },
        mainKeshihuaMainSearchWrapS1: "#646464",
        mainKeshihuaMainSearchWrapInputColor: "#000",
        mainKeshihuaMainSearchWrapInputBg: "#fff",
        uipagesortColor: "#333",
        uipageSortInputTextBg: "#FFF",
        uipageSortInputTextBorderColor: "#fff",
        mainKeshihuaMainSearchWrapInputBorderColor: "#ccc",
        mainBodyInfoBoxTitleS2: "#3666ed",
        mainBodyInfoBoxUlWrapLiS1I: "#08b6bf",
        mainBodyEchartsWrapBgImage: "url(../images/white/right-bottom-pic.png)",
        mainBodyInfoBoxTitleIconBgImage: "url(../images/white/white-icon-all.png)",
        mainBodyInfoBoxTitleIconBg: "#a7d9fa",
        mainKeshihuaMainSearchWrapTimewrapIcon: "url(../images/white/white-icon-all.png)",
        keshihuaTableTbodyTrOddBg: "#fff",
        keshihuaTableTbodyTrEvenBg: "#f8f9fb",
        keshihuaTableTbodyTdColor: "#333",
        keshihuaTableTheadTrImage: "linear-gradient(0deg, #f6f7f9, #fefeff)",
        keshihuaTableBorderColor: "#d6d9e3",
        keshihuaTableThColor: "#666",
        keshihuaTableTdFinishedColor: "#3f6dcd",
        mainKeshihuamainsearchwrapsearchbtnBgImage: "linear-gradient(0deg, #36a5f2, #338af0)",
        keshihuaTableHandleLook: "#333",
        keshihuaTableHandleDel: "#000",
        keshihuatableChecked: 'url(../images/white/white-icon-all.png)',
        keshihuaTableHandlePretreatment: "#333"
    }

}


var theme = "dark",
    chooseTheme = {};

if (localStorage.getItem('themeRobot')) {
    theme = localStorage.getItem('themeRobot');
    chooseTheme = JSON.parse(theme);
} else {
    chooseTheme = themeConfig[theme];
    localStorage.setItem('themeRobot', JSON.stringify(chooseTheme));
}

export default {
    themeConfig,
    chooseTheme,
    theme

}