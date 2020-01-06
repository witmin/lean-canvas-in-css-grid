import React from 'react';

function App() {
    return (
        <div className="App">

            <div className="canvas">
                <div className="first row">
                    {/* Problem */}
                    <div className="box one problem">
                        <h2>Problem <span lang="zh-hans">问题</span></h2>
                        <p className="help">List your top 1-3 problems.</p>
                        <div className="sub-section">
                            <h3>Existing alternatives <span lang="zh-hans">现有替代方案</span></h3>
                            <p className="help">List how these problems are solved today.</p>
                        </div>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">1</div>
                    </div>

                    {/* Solution */}
                    <div className="box two solution">
                        <h2>Solution<span lang="zh-hans">解决方案</span></h2>
                        <p className="help">Outline a possible solution for each problem</p>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">4</div>
                    </div>

                    {/* Key metrics */}
                    <div className="box three key-metrics">
                        <h2>Key metrics<span lang="zh-hans">关键指标</span></h2>
                        <p className="help">List the key numbers that tell you how your business is doing.</p>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">8</div>
                    </div>

                    {/* Unique Value Proposition */}
                    <div className="box four uni-val-prop">
                        <h2>Unique value proposition<span lang="zh-hans">独特的价值主张</span></h2>
                        <p className="help">Single, clear, compelling message that states why you are different and worth paying attention.</p>
                        <div className="sub-section">
                            <h3>High-level concept <span lang="zh-hans">高级概念</span></h3>
                            <p className="help">List your X for Y analogy e.g. YouTube = Flickr for videos.</p>
                        </div>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">3</div>

                    </div>

                    {/* Unfair advantage */}
                    <div className="box five unfair-advantage">
                        <h2>Unfair advantage<span lang="zh-hans">压倒性优势</span></h2>
                        <p className="help">Something that cannot easily be bought or copied.</p>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">9</div>
                    </div>

                    {/* Channels */}
                    <div className="box six channels">
                        <h2>Channels<span lang="zh-hans">渠道</span></h2>
                        <p className="help">List your path to customers (inbound or outbound).</p>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">5</div>
                    </div>

                    {/* Customer segments */}
                    <div className="box seven customer segments">
                        <h2>Customer segments<span lang="zh-hans">客户群</span></h2>
                        <p className="help">List your target customers and users.</p>
                        <div className="sub-section">
                            <h3>Early adopters<span lang="zh-hans">早期采用者</span></h3>
                            <p className="help">List the characteristics of your ideal customers.</p>
                        </div>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">2</div>
                    </div>

                </div>

                <div className="second row">

                    {/* cost-structure */}
                    <div className="box eight cost-structure">
                        <h2>Cost structure<span lang="zh-hans">成本结构</span></h2>
                        <p className="help">List your fixed and variable costs.</p>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">7</div>
                    </div>

                    {/* Revenue stream*/}
                    <div className="box nine revenue-streams">
                        <h2>Revenue streams<span lang="zh-hans">收入流向</span></h2>
                        <p className="help">List your sources of revenue.</p>
                        <div className="filling-order" title="Suggested filling order 建议填写顺序">6</div>
                    </div>

                </div>
            </div>

            {/*    Footer    */}
            <footer className="footer">
                <p>Lean Canvas in CSS Grid was built by <a href="https://www.millielin.com">Millie Lin</a> referred to <a href="https://leanstack.com/leancanvas">Leanstack</a>.
                </p>
                <p className="copyright">Lean Canvas is adapted from The Business Model Canvas and is licensed under the Creative Commons Attribution-Share Alike 3.0 Un-ported License.</p>
            </footer>
        </div>
    );
}

export default App;
