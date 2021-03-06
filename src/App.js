import React, { Component } from 'react';

import './js/ui';

import './css/base.css';
import './css/layout.css';
import './css/component.css';
import './css/page.css';
import './css/response.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import URL from './context/url';

import EgovHeader from 'common/EgovHeader';
import EgovFooter from 'common/EgovFooter';
//import EgovContainer from 'common/EgovContainer';

import EgovMain from 'egov/main/EgovMain';
import EgovLogin from 'egov/login/EgovLogin';

import EgovAboutSite from 'egov/about/EgovAboutSite';
import EgovAboutHistory from 'egov/about/EgovAboutHistory';

import EgovSupportDownloadList from 'egov/support/download/EgovDownloadList';
import EgovSupportDownloadDetail from 'egov/support/download/EgovDownloadDetail';
import EgovSupportDownloadCreate from 'egov/support/download/EgovDownloadCreate';
import EgovSupportQnaList from 'egov/support/qna/EgovQnaList';
import EgovSupportQnaDetail from 'egov/support/qna/EgovQnaDetail';

import EgovDailyList from 'egov/inform/daily/EgovDailyList';
import EgovWeeklyList from 'egov/inform/weekly/EgovWeeklyList';

import EgovNoticeList from 'egov/inform/notice/EgovNoticeList';
import EgovNoticeDetail from 'egov/inform/notice/EgovNoticeDetail';
import EgovNoticeCreate from 'egov/inform/notice/EgovNoticeCreate';
import EgovNoticeModify from 'egov/inform/notice/EgovNoticeModify';

import EgovGalleryList from 'egov/inform/gallery/EgovGalleryList';

import EgovAdminScheduleList from 'egov/admin/schedule/EgovAdminScheduleList';
import EgovAdminTemplateList from 'egov/admin/template/EgovAdminTemplateList';
import EgovAdminBoardList from 'egov/admin/board/EgovAdminBoardList';
import EgovAdminBoardDetail from 'egov/admin/board/EgovAdminBoardDetail';
import EgovAdminBoardModify from 'egov/admin/board/EgovAdminBoardModify';
import EgovAdminUsageList from 'egov/admin/usage/EgovAdminUsageList';

import EgovAdminNoticeList from 'egov/admin/notice/EgovAdminNoticeList';
import EgovAdminNoticeDetail from 'egov/admin/notice/EgovAdminNoticeDetail';
import EgovAdminNoticeModify from 'egov/admin/notice/EgovAdminNoticeModify';

import EgovAdminGalleryList from 'egov/admin/gallery/EgovAdminGalleryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVO: null
    }
  }
  render() {
    console.log('App render');
    return (
      <div className="wrap">
        <EgovHeader
          loginVO={this.state.loginVO}
          onChangeLogin={function (_loginVO) {
            console.log(_loginVO);
            this.setState(_loginVO);
            console.log("app = " + JSON.stringify(this.state.loginVO));
          }.bind(this)}></EgovHeader>
        <Switch>
          {/* MAIN */}
          <Route exact path={URL.MAIN}>
            <EgovMain></EgovMain>
          </Route>

          {/* LOGIN */}
          <Route path={URL.LOGIN}>
            <EgovLogin onChangeLogin={function (_loginVO) {
              console.log("App is " + _loginVO);
              this.setState(_loginVO);
              console.log("app = " + JSON.stringify(this.state.loginVO));
            }.bind(this)}></EgovLogin>
          </Route>
          
          {/* ABOUT */}
          <Redirect exact from={URL.ABOUT} to={URL.ABOUT_SITE} />

          <Route path={URL.ABOUT_SITE} component={EgovAboutSite} />
          <Route path={URL.ABOUT_HISTORY} component={EgovAboutHistory} />
          
          {/* SUPPORT */}
          <Redirect exact from={URL.SUPPORT} to={URL.SUPPORT_DOWNLOAD} />

          <Route exact path={URL.SUPPORT_DOWNLOAD} component={EgovSupportDownloadList} />
          <Route path={URL.SUPPORT_DOWNLOAD_DETAIL} component={EgovSupportDownloadDetail} />
          <Route path={URL.SUPPORT_DOWNLOAD_CREATE} component={EgovSupportDownloadCreate} />
          
          <Route exact path={URL.SUPPORT_QNA} component={EgovSupportQnaList} />
          <Route exact path={URL.SUPPORT_QNA_DETAIL} component={EgovSupportQnaDetail} />

          {/* INFORM */}
          <Redirect exact from={URL.INFORM} to={URL.INFORM_DAILY} />
          
          <Route path={URL.INFORM_DAILY} component={EgovDailyList} />
          <Route path={URL.INFORM_WEEKLY} component={EgovWeeklyList} />
          
          <Route exact path={URL.INFORM_NOTICE} component={EgovNoticeList} />
          {/* <Route path={`${URL.INFORM_NOTICE_DETAIL}/:boardId`} component={EgovNoticeDetail} /> */}
          <Route path={URL.INFORM_NOTICE_DETAIL} component={EgovNoticeDetail} />
          {/* <Route path={URL.INFORM_NOTICE_DETAIL} component={() => <EgovNoticeDetail/>} /> */}
          {/* <Route path={URL.INFORM_NOTICE_CREATE} component={EgovNoticeCreate} /> */} 
          <Route path={URL.INFORM_NOTICE_CREATE} render={() => <EgovNoticeCreate mode="new"/>} />
          <Route path={URL.INFORM_NOTICE_MODIFY} render={() => <EgovNoticeCreate mode="edit"/>} />
          <Route path={URL.INFORM_GALLERY} component={EgovGalleryList} />
          
          {/* ADMIN */}
          <Redirect exact from={URL.ADMIN} to={URL.ADMIN_SCHEDULE} />
          
          <Route path={URL.ADMIN_SCHEDULE} component={EgovAdminScheduleList} />
          <Route path={URL.ADMIN_TEMPLATE} component={EgovAdminTemplateList} />
          
          <Route exact path={URL.ADMIN_BOARD} component={EgovAdminBoardList} />
          <Route path={`${URL.ADMIN_BOARD_DETAIL}/:boardId`} component={EgovAdminBoardDetail} />
          <Route path={`${URL.ADMIN_BOARD_MODIFY}/:boardId`} component={EgovAdminBoardModify} />
          
          <Route path={URL.ADMIN_USAGE} component={EgovAdminUsageList} />
          
          <Route exact path={URL.ADMIN_NOTICE} component={EgovAdminNoticeList} />
          <Route path={`${URL.ADMIN_NOTICE_DETAIL}/:boardId`} component={EgovAdminNoticeDetail} />
          <Route path={`${URL.ADMIN_NOTICE_MODIFY}/:boardId`} component={EgovAdminNoticeModify} />
          
          <Route path={URL.ADMIN_GALLERY} component={EgovAdminGalleryList} />
          <Route path={URL.ADMIN_BOARD_CREATE} component={EgovAdminBoardModify} />

        </Switch>
        <EgovFooter></EgovFooter>
      </div>
    )
  }
}

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.REACT_APP_EGOV_CONTEXT_URL", process.env.REACT_APP_EGOV_CONTEXT_URL);


export default App;
