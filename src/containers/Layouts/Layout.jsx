import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Header/>
                </div>
                <div>
                    <div className="content">
                        {this.props.children}
                    </div>
                    <div>
                        <Footer className="footer"/>
                    </div>
                </div>
            </div>
        )
    }
}
