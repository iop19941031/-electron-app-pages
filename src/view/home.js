import React, { PureComponent } from 'react'
import { allMusic } from "@/request/index";

import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList } from "react-window";

import home_scss from "./home.scss";

let list = []
const isItemLoaded = index => !!list[index];

class Row extends PureComponent {
    render() {
        const { index, style } = this.props;
        let label;
        if (!list[index]) {
            label = "Loading...";
        } else {
            label = list[index];
        }
        return (
            <div style={style}>
                {label}
            </div>
        );
    }
}
export default class extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { musicList: [] };
    // }
    componentDidMount() {
        this.fetch()
    }
    fetch() {
        allMusic().then(res => {
            // this.setState({
            //     musicList: res
            // })
            list = res
        })

    }

    render() {
        return <main>
            <header></header>
            <main>
                <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    itemCount={1000}
                    loadMoreItems={allMusic}
                >
                    {({ onItemsRendered, ref }) => (
                        <FixedSizeList
                            className={home_scss.list}
                            height={150}
                            itemCount={1000}
                            itemSize={30}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                            width={300}
                        >
                            {Row}
                        </FixedSizeList>
                    )}
                </InfiniteLoader>
            </main>
            <footer>
                <button >上一首</button>
                <button >播放</button>
                <button >下一首</button>
            </footer>
        </main>
    }
}