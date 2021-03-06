import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'common/leftmenu/EgovLeftNavInform';
import EgovPaging from 'common/EgovPaging';

function EgovGalleryList() {
    console.log("EgovGalleryList create");
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to="" className="home">Home</Link></li>
                        <li><Link to="">알림마당</Link></li>
                        <li>사이트갤러리</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents SITE_GALLARY_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">알림마당</h1>
                        </div>

                        <h2 className="tit_2">사이트갤러리</h2>

                        {/* <!-- 검색조건 --> */}
                        <div className="condition">
                            <ul>
                                <li className="third_1 L">
                                    <label className="f_select" htmlFor="sel1">
                                        <select name="" id="sel1" title="조건">
                                            <option value="0">제목</option>
                                            <option value="1">내용</option>
                                            <option value="2">작성자</option>
                                        </select>
                                    </label>
                                </li>
                                <li className="third_2 R">
                                    <span className="f_search w_500">
                                        <input type="text" name="" value="" placeholder="" />
                                        <button type="button">조회</button>
                                    </span>
                                </li>
                                <li>
                                    <Link to="" className="btn btn_blue_h46 pd35">등록</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!--// 검색조건 --> */}

                        {/* <!-- 게시판목록 --> */}
                        <div className="board_list BRD002">
                            <div className="head">
                                <span>번호</span>
                                <span>제목</span>
                                <span>작성자</span>
                                <span>작성일</span>
                                <span>조회수</span>
                            </div>
                            <div className="result">
                                {/* <!-- case : 데이터 없을때 --> */}
                                <p className="no_data">검색된 결과가 없습니다.</p>

                                {/* <!-- case : 데이터 있을때 --> */}
                                <Link to="" className="list_item">
                                    <div>3</div>
                                    <div className="al">전자정부표준프레임워크 심플 홈페이지 갤러리입니다.</div>
                                    <div>관리자</div>
                                    <div>2021-7-24</div>
                                    <div>3</div>
                                </Link>
                                <Link to="" className="list_item">
                                    <div>2</div>
                                    <div className="al">전자정부표준프레임워크 심플 홈페이지 갤러리입니다.</div>
                                    <div>관리자</div>
                                    <div>2021-7-24</div>
                                    <div>3</div>
                                </Link>
                                <Link to="" className="list_item">
                                    <div>1</div>
                                    <div className="al">전자정부표준프레임워크 심플 홈페이지 갤러리입니다.</div>
                                    <div>관리자</div>
                                    <div>2021-7-24</div>
                                    <div>3</div>
                                </Link>
                            </div>
                        </div>
                        {/* <!--// 게시판목록 --> */}

                        <div className="board_bot">
                            {/* <!-- Paging --> */}
                            <EgovPaging></EgovPaging>
                            {/* <!--/ Paging --> */}
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EgovGalleryList;