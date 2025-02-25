export default {
  title: "기초",
  description:
    "색상과 타이포그래피와 같이 디자인 시스템의 기본 계층에 대한 값을 저장하는 디자인 자산과 토큰입니다. 이들은 컴포넌트에서 사용되므로, 이 수준의 변경은 전체 시스템에 영향을 미칩니다.",
  sections: {
    "df-color": {
      title: "색상",
      description:
        "브랜드를 보여주는 효과적인 방법일 뿐만 아니라 사용자와 소통하는 효과적인 방법입니다. 심미성보다 목적성을 염두에 두고 만든 색상 팔레트는 인터페이스에 의미를 더함으로써 직관적인 디자인 패턴을 개발하는 데 도움이 될 수 있습니다.",
      checklist: {
        "df-color-a11y": {
          title: "접근성",
          description:
            "팔레트의 주요 색상들 간에 접근 가능한 조합이 있는지 확인하세요. 더 중요한 것은 배경색과 텍스트 색상이 최소한 AA 표준 대비율을 가지도록 하는 것입니다.",
        },
        "df-color-semantic": {
          title: "의미론적 색상",
          description:
            "브랜드 색상 외에도 비활성화 상태, 배경, 액션, 고대비 텍스트와 같은 기능을 위한 색상을 정의하고 변수로 만들어야 합니다.",
        },
        "df-color-dark-mode": {
          title: "다크 모드",
          description:
            "색상 팔레트의 다크 모드 버전을 준비하면 디자인 시스템이 사용자의 OS 색상 설정에 적응할 수 있습니다.",
        },
        "df-color-guidelines": {
          title: "가이드라인",
          description:
            "팔레트의 색상을 언제 어떻게 사용해야 하는지, 사용할 때 주의할 점은 무엇인지, 어떻게 사용하지 말아야 하는지에 대한 가이드라인을 제공하세요.",
        },
      },
    },
    "df-layout": {
      title: "레이아웃",
      description:
        "잘 고려된 레이아웃은 큰 효과가 있습니다. 그리드와 간격을 일관되게 사용하면 사용자가 사용자 인터페이스를 스캔하고 콘텐츠를 파악하기 쉬워집니다.",
      checklist: {
        "df-layout-units": {
          title: "단위",
          description:
            "단위는 레이아웃의 가장 작은 구성 요소입니다. 일관된 증분(예: 4포인트 시스템의 4, 8, 12, 16)을 가진 값 세트를 정의하면 그리드와 간격 값을 디자인하기 위한 기초를 제공할 것입니다.",
        },
        "df-layout-grid": {
          title: "그리드",
          description:
            "모든 레이아웃은 인터페이스에 질서와 계층을 부여하는 그리드 위에 있어야 합니다. 인터페이스가 어떤 플랫폼에도 빠르게 적응할 수 있도록 모바일, 태블릿, 데스크톱 기기별로 열, 거터, 여백이 있는 그리드를 별도로 정의하세요.",
        },
        "df-layout-breakpoints": {
          title: "중단점",
          description: "그리드가 적응할 화면 크기와 방향을 미리 정의하세요.",
        },
        "df-layout-spacing": {
          title: "간격",
          description:
            "수평 및 수직 리듬은 레이아웃에서 중요한 역할을 합니다. 그리드와 독립적으로 인터페이스 요소 사이에 공간을 추가하는 간단한 방법을 제공해야 합니다.",
        },
      },
    },
    "df-typography": {
      title: "타이포그래피",
      description:
        "타이포그래피는 제품에서 콘텐츠를 표면화하는 주요 방법 중 하나입니다. 타이포그래피 스케일에서 명확한 계층과 대비되는 스타일은 읽기 쉽게 만들고 제품의 전체 구조에 도움이 됩니다. 또한 브랜드 특성과 존재감을 시각화할 수 있는 기회이기도 합니다.",
      checklist: {
        "df-typography-mobile": {
          title: "반응형",
          description:
            "데스크톱 기기는 일반적으로 모바일 기기에 비해 더 큰 글꼴 크기를 사용할 수 있습니다. 뷰포트 크기에 맞게 조정되는 타이포그래피 스케일을 만들면 더 의미 있는 계층과 레이아웃에 도움이 됩니다.",
        },
        "df-typography-grid": {
          title: "그리드 관계",
          description:
            "글꼴 크기와 행간은 텍스트와 다른 UI 요소 간의 더 나은 페어링을 위해 그리드와 일치해야 합니다. 이에 대한 좋은 예는 바운딩 박스가 있는 아이콘과 짝을 이루는 텍스트입니다.",
        },
        "df-typography-readability": {
          title: "가독성",
          description:
            "타이포그래피 스케일의 자간(트래킹), 행간(리딩), 행 길이를 최적화하면 텍스트의 가독성 향상에 도움이 됩니다.",
        },
        "df-typography-performance": {
          title: "성능",
          description:
            "사용자 정의 글꼴은 특히 웹에서 표시되기 전에 다운로드되어야 합니다. 타이포그래피 자산에 대해 적절한 대체 방안과 빠른 로딩 시간이 있는지 확인하세요. 시스템 글꼴을 사용하면 이 성능 문제가 해결됩니다.",
        },
        "df-typography-guidelines": {
          title: "가이드라인",
          description:
            "타이포그래피 스케일의 조합을 언제 어떻게 사용해야 하는지, 사용할 때 주의할 점은 무엇인지, 어떻게 사용하지 말아야 하는지에 대한 가이드라인을 제공하세요.",
        },
      },
    },
    "df-elevation": {
      title: "고도",
      description:
        "고도는 z축을 따라 두 표면 사이의 상대적 거리를 제어합니다. 라이트 모드에서는 일반적으로 표면에 적용된 그림자 값으로 강조되고, 다크 모드에서는 배경색 값을 사용하여 전달됩니다.",
      checklist: {
        "df-elevation-shadows": {
          title: "그림자",
          description:
            "지원되는 고도 레벨을 기반으로 여러 그림자 값을 제공하세요. 대부분의 경우 제품에서 3~4개의 고도 레벨이 필요할 것입니다.",
        },
        "df-elevation-background": {
          title: "배경색",
          description:
            "각 그림자 값에는 연결된 배경색이 있어야 합니다. 라이트 모드에서는 그림자와 함께 사용되므로 이러한 색상이 모두 흰색으로 해결될 수 있습니다. 다크 모드에서는 그림자 대신 표면의 z축 거리를 전달하는 데 사용됩니다.",
        },
        "df-elevation-z": {
          title: "Z-인덱스",
          description:
            "어떤 요소가 다른 요소 위에 렌더링될 우선순위를 가질지 제어하기 위한 z-인덱스 값 시스템을 정의하세요.",
        },
      },
    },
    "df-motion": {
      title: "모션",
      description:
        "공유된 모션 값은 더 일관된 사용자 경험과 브랜드와의 더 나은 정렬을 제공합니다.",
      checklist: {
        "df-motion-easing": {
          title: "이징",
          description:
            "컴포넌트 전환에 사용되는 표준 이징 함수를 시스템 전체에 제공하세요. 시작점으로 일반, 가속, 감속 함수를 사용하면 일반적인 컴포넌트 사용 사례를 다룰 수 있습니다.",
        },
        "df-motion-duration": {
          title: "지속 시간",
          description:
            "제품 전체에서 컴포넌트 전환을 일관되게 유지하기 위해 애니메이션 지속 시간에 대한 여러 값을 정의하세요.",
        },
        "df-motion-a11y": {
          title: "접근성",
          description:
            "사용자의 모션 감소 설정에 주의를 기울이고 애니메이션을 덜 두드러지게 만들거나 완전히 제거하세요.",
        },
      },
    },
    "df-iconography": {
      title: "아이콘",
      description:
        "아이콘은 기능이나 콘텐츠를 나타내는 기호입니다. 그들의 의미를 한눈에 이해할 수 있기 때문에 사용자 인터페이스에서 특히 인식하기 쉽고 도움이 됩니다. 장식용으로만 사용될 수 있지만, 의미 있고 일관되게 사용될 때 그들의 잠재력을 완전히 실현할 수 있습니다.",
      checklist: {
        "df-iconography-a11y": {
          title: "접근성",
          description:
            "의미를 전달하거나 기능을 수행하는 아이콘의 경우, 같은 의미나 기능을 표현하는 기본 접근성 이름을 제공하세요. 스크린 리더와 다른 보조 기술은 이 이름을 사용하여 사용자에게 인터페이스를 안내할 수 있습니다. 순수하게 장식적인 아이콘의 경우 이름이 필요하지 않습니다. 디자인 시스템이 프론트엔드 코드를 내보내는 경우, 예를 들어 aria-label을 사용하여 아이콘 이름이 포함되도록 하세요.",
        },
        "df-iconography-style": {
          title: "스타일",
          description:
            "아이콘 패밀리가 전체적으로 시각적으로 이치에 맞는지 확인하세요. 아웃라인 또는 채워진 스타일을 선택하고 그것을 고수하면 더 나은 시각적 일관성과 예측 가능성으로 이어집니다.",
        },
        "df-iconography-naming": {
          title: "이름 짓기",
          description:
            "아이콘의 모양이 아닌 의사소통 목적을 기반으로 이름을 지으세요. 예를 들어, 삼각형 모양의 미디어 플레이어 재생 버튼 아이콘은 '삼각형'이 아닌 '재생'으로 이름 지어야 합니다. 검색성을 높이기 위해 관련 키워드를 추가할 수 있습니다.",
        },
        "df-iconography-grid": {
          title: "그리드와의 관계",
          description:
            "그리드와 잘 어울리는 바운딩 박스에 아이콘을 그리세요. 이는 다른 UI 요소와의 더 나은 페어링을 만듭니다. 좋은 예는 텍스트와 짝을 이루는 바운딩 박스가 있는 아이콘입니다.",
        },
        "df-iconography-keywords": {
          title: "키워드",
          description:
            "키워드를 추가하면 각 아이콘의 검색성이 향상되고 시스템을 사용하는 모든 사람에게 더 나은 사용자 경험을 제공합니다.",
        },
        "df-iconography-reserved": {
          title: "예약된 아이콘",
          description:
            "일반적인 작업을 나타내는 아이콘을 예약하면 다른 맥락에서 사용되는 것을 방지할 수 있습니다. 탐색이나 추가 및 삭제를 위한 시스템 아이콘이 좋은 예입니다. 이는 더 직관적인 사용자 경험으로 이어집니다.",
        },
        "df-iconography-guidelines": {
          title: "가이드라인",
          description:
            "아이콘을 언제 어떻게 사용해야 하는지, 사용할 때 주의할 점은 무엇인지, 어떻게 사용하지 말아야 하는지에 대한 가이드라인을 제공하세요.",
        },
      },
    },
  },
};
