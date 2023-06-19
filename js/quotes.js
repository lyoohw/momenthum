const quotes = [
    {
        quote: "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라.",
        author: "마야 안젤루",
    },
    {
        quote: "인생에 뜻을 세우는데 적당한 때는 없다",
        author: "볼드윈",
    },
    {
        quote: "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
        author: "넬슨 만델라",
    },
    {
        quote: "생활은 과감한 모험이거나 아니면 아무것도 아니다.",
        author: "헬렌 켈러",
    },
    {
        quote: "많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다.",
        author: "토마스 에디슨",
    },
    {
        quote: "별을 바라보고 땅을 밟는다.",
        author: "시오도르 루즈벨트",
    },
    {
        quote: "일기예보에도 불구하고, 봄처럼 살아라.",
        author: "릴리 퓰리쳐",
    },
    {
        quote: "성공이란 실패에 실패를 거듭하면서도 열의를 잃지 않는 것이다.",
        author: "윈스턴 처칠",
    },
    {
        quote: "성공한 사람이 되려고 애쓰지 말고, 가치 있는 사람이 되려 애써라.",
        author: "아인슈타인",
    },
    {
        quote: "더 나은 것을 위해 좋은 것을 포기하는 걸 두려워 하지 마라.",
        author: "존 록펠러",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");



const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;