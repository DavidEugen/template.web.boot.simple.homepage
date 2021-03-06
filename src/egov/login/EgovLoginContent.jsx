import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SERVER_URL } from 'context/config';
//import * as EgovNet from 'context/egovFetch';

class EgovLoginContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 'default'
            , password: 'default'
            , userSe: 'USR'
            , loginVO: null
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    inputFormHandler(e) {
        console.log("=====> inputFormHandler");
        //e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    submitFormHandler(e) {
        console.log("=====> submitFormHandler");
        e.preventDefault();
        //this.setState({ [e.target.name]: e.target.value });
        //fetch('list.json')

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            origin : SERVER_URL,
            credentials : 'include',
            body: JSON.stringify({
                id: this.state.id,
                password: this.state.password,
                userSe: this.state.userSe
            })
        }

        console.log("requestOptions.body : ",requestOptions.body);
        fetch(SERVER_URL + '/uat/uia/actionLoginAPI.do', requestOptions)
            .then(function (response) {
                console.log("===>>> response = "+response);
                console.log("===>>> response.headers = "+response.headers);
                //console.log("===>>> json 1 = "+response.json());
                return response.json();
            })
            .then(function (json) {
                console.log("===>>> json = " + JSON.stringify(json));
                
                var resultVO = json.resultVO;
                var resultCode = json.resultCode;
                console.log("===>>> json = " + JSON.stringify(resultVO));
                if(resultCode === '200'){
                    this.setState({ loginVO: resultVO });
                    this.props.onChangeLogin({ loginVO: resultVO });
                    this.props.history.push('/');
                } else {
                    alert(json.resultMessage)
                }

            }.bind(this))
            .catch(error => {
                if(error === 'TypeError: Failed to fetch'){
                    alert("???????????? ????????? ???????????? ????????????. ????????? ???????????????.");
                }
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    componentDidMount() {
        console.log("===>>> componentDidMount 1");

        console.log("===>>> componentDidMount 2");
    }

    render() {
        return (
            <div className="contents" id="contents">
                {/* <!-- ?????? --> */}
                <div className="Plogin">
                    <h1>?????????</h1>
                    <p className="txt">????????????????????????????????? ???????????? ???????????? ????????? ??????????????????.<br />???????????? ????????? ?????? ???????????? ???????????? ???????????? ??? ????????????.</p>

                    <div className="login_box">
                        <form name="" method="" action="" >
                            <fieldset>
                                <legend>?????????</legend>
                                <span className="group">
                                    <input type="text" name="" title="?????????" placeholder="?????????" 
                                        onChange={ e => this.setState({id: e.target.value})}/>
                                    <input type="password" name="" title="????????????" placeholder="????????????" 
                                        onChange={ e => this.setState({password: e.target.value})}/>
                                </span>
                                <div className="chk">
                                    <label className="f_chk" htmlhtmlFor="saveid">
                                        <input type="checkbox" name="" id="saveid" /> <em>ID??????</em>
                                    </label>
                                </div>
                                {/* <button type="button" onClick={submitFormHandler}><span>LOGIN</span></button> */}
                                <button type="button" onClick={this.submitFormHandler}><span>LOGIN</span></button>
                            </fieldset>
                        </form>
                    </div>

                    <ul className="list">
                        <li>??????????????? 6~12?????? ?????? ???/?????????, ??????, ??????????????? ???????????? ???????????? ??? ????????????.</li>
                        <li>?????? ??????????????? ?????? ?????? ???????????? ??????????????? ?????? ??????, ???????????? ???????????? ???????????????
                            ??????????????? ???????????? ?????? ????????????.</li>
                    </ul>
                </div>
                {/* <!--// ?????? --> */}
            </div>
        );
    }
}

export default withRouter(EgovLoginContent);