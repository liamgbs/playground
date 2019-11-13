interface Theme {
    textFont?: string,
    primaryTextColor?: string,
    secondaryTextColor?: string,
    primaryColor?: string,
    secondaryColor?: string,
    tertiaryColor?: string,
    buttonColor?: string,
    logoURL?: string,
    motd?: string
}

const themes : {[key: string] : Theme} = {
    "plt": {
        textFont: "'Courier New', Courier, monospace",
        primaryTextColor: "#000",
        secondaryTextColor: "#000",
        primaryColor: "#febedb",
        secondaryColor: "#eaeaea",
        tertiaryColor: "linear-gradient(#e66465, #9198e5)",
        motd: "Liam is awesome!",
        logoURL: 'url(./img/plt.jpg)'

    },
    "smartagent": {
        textFont: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        primaryTextColor: "#fff",
        secondaryTextColor: "#fff",
        primaryColor: "#2c3c4f",
        secondaryColor: "#405772",
        tertiaryColor: "#384b61",
        buttonColor: "#43b392",
        motd: "Liam is awesome!",
        logoURL: 'url(./img/smartagent.png)'
    },
    "dark": {
        
    }
}

export default function(company: string) : Promise<Theme> {
    return new Promise(res => {
        setTimeout(() => {
            return res(themes[company] || {})
        }, 200)
    })
}