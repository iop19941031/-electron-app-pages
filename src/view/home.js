import React from 'react'
import { allMusic } from "@/request/index";
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { musicList: [] };
    }
    componentDidMount() {
        this.fetch()
    }
    fetch() {
        allMusic().then(res => {
            this.setState({
                musicList: res
            })
        })

    }
    render() {
        return <main>
            <header></header>
            <main>
                <ul>
                    {
                        this.state.musicList.map(e => {
                            return <li>{e}</li>
                        })

                    }
                </ul>
            </main>
            <footer>
                <button >上一首</button>
                <button >播放</button>
                <button >下一首</button>
            </footer>
        </main>
    }
}