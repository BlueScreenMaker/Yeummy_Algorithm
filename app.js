function moneyFormat({ number }) {

    const absNumber = Math.abs(number);


    if (absNumber >= 1.0e4) {
        const extraNumber = moneyFormat({ number: absNumber % 1.0e4 });
      return `${Math.trunc(absNumber / 1.0e4)}만${extraNumber !== '0' ? extraNumber : ''}`;
    }
    if (absNumber >= 1.0e3) {
        const extraNumber = moneyFormat({ number: absNumber % 1.0e3 });
      return `${Math.trunc(absNumber / 1.0e3)}천${extraNumber !== '0' ? extraNumber : ''}`;
    }
  
    return absNumber.toString().trim();
}



  
console.log(moneyFormat({ number: 45000 })); // 1만
