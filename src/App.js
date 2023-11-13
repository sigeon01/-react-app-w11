import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import "./styles.css";

import steamImg from "./img/Steam.jpg";
import unityImg from "./img/Unity.jpeg";
import blenderImg from "./img/Blender.jpg";
import lmmsImg from "./img/LMMS.png";
import firealpacaImg from "./img/Firealpaca.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "게임 개발하기", sub: "Making some games, ey?" },
      welcome: { title: "welcome", desc: "Hello, coders.", image:steamImg},
      contents: [
        { id: 1, title: "Unity", desc: "유니티(Unity)는 3D 및 2D 비디오 게임의 개발 환경을 제공하는 게임 엔진이자, 3D 애니메이션과 건축 시각화, 가상현실(VR) 등 인터랙티브 콘텐츠 제작을 위한 통합 제작 도구이다. 또한 유니티는 윈도우, 맥OS, iOS, 안드로이드, 플레이스테이션, 엑스박스, 닌텐도 스위치, 웹브라우저(WebGL) 등 27개의 플랫폼에서 사용 가능한 콘텐츠를 만들 수 있고, 제작 도구인 유니티 에디터는 윈도우와 맥OS를 지원한다.", image:unityImg},
        { id: 2, title: "Blender", desc: "블렌더(Blender)는 GNU 일반 공중 사용 허가서에 따라 자유 소프트웨어로 릴리즈된 3차원 컴퓨터 그래픽스 소프트웨어이다. 이 프로그램은 모델링, UV 언래핑, 텍스처링, 리깅, 워터 시뮬레이션, 스키닝, 애니메이팅, 렌더링, 파티클 등의 시뮬레이션을 수행할 수 있으며 넌리니어 편집, 콤포지팅, 파이썬 스크립트 등을 통하여 쌍방향 3차원 프로그램을 제작할 수도 있다." ,image:blenderImg},
        { id: 3, title: "LMMS", desc: "LMMS(이전 명칭: Linux MultiMedia Studio)는 디지털 오디오 워크스테이션 소프트웨어이다. LMMS가 적절한 하드웨어의 컴퓨터에서 실행되면 소리 합성, 샘플 정렬, MIDI 키보드의 재생, 또 트래커, 시퀀서, 신시사이저의 기능 병합을 통해 음악을 만들어낼 수 있다. 리눅스 오디오 개발자의 심플 플러그인 API(LADSPA), 사운드폰트 (SF2) 파일, 버추얼 스튜디오 테크놀로지 (VST) 플러그인을 지원한다. GNU GPL 버전 2(GPLv2)로 출시되는 자유 소프트웨어이다." ,image:lmmsImg},
        { id: 4, title: "FireAlpaca", desc: "파이어알파카(FireAlpaca)는 피지엔이 개발하고 출시한 래스터 그래픽스 편집기이다.", image:firealpacaImg},
      ],
    };
  }
  render() {
    var _title,
      _desc = null,
      _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }
}

export default App;
