let card_numbers = ['9412-3456-7890-1234','123123123123'];
solution(card_numbers)

function solution (card_numbers){
    let answer = card_numbers.map(num=>{
        return lunhnEffectiven(num.replace(/[ -]/g,'')); //대시 제거 후 함수 호출
    });
    return answer;
}
//유효성 검사 함수
function lunhnEffectiven(cardNum){
    let creditArray  = cardNum.split('').map(Number).reverse();//문자열 배열 숫자로 변환 후 반전
    let sum = 0; //유효성 판단 값
    let result = 1;//각 카드 번호가 올바르면 1, 올바르지 않으면 0
    creditArray.forEach((num,i)=>{
        //유효성 검사 시작
        /** 가장 오른쪽부터 짝수번째 자리 숫자들에 2를 곱한 후 모두 더합니다. 이를 (1)이라고 합니다.
         * 만약 2를 곱한 수가 두 자릿수라면 각 자릿수의 값을 더해 한 자릿수로 만든 후 더합니다.*/
        //1번 조건
        if(i%2==0){
            if((num *= 2)>9) num-=9;
        }
        //* 가장 오른쪽부터 홀수번째에 있는 숫자를 모두 더하고 이를 (2)라고 합니다.
        sum += num;//->1번 2번 조건문 둘다 해당된다.
    })
    //* (1) + (2)가 10으로 나누어 떨어지면 유효한 번호입니다.
    if(sum%10 != 0) result = 0;
    return result;
}
/*
    내가 틀렸던 이유
    1. 떨어서 문제를 제대로 읽지 않아서 24줄이 조건문 1번 2번 해당하는지 파악하지 못했다.
    2. 코딩테스트 연습하자.
    3. 다시 한번 재도전.
 */