var count = 0;

function cc(card) {
  // �����Ĵ���д������ע������
 
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      
      break;
    case 7:
    case 8:
    case 9:
     count += 0;
     break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      
      break;
      
  }
  
  if ( count > 0){
  
  return count + " Bet";
  }
  else {
    return count + " Hold";
  }
  // �����Ĵ���д������ע������
}

// ��������������/ɾ�� cc �����ĵ��������Խ��
// ��ʾ: ���ֻ����ʾ���һ��ִ�еķ���ֵ
cc(2); cc(3); cc(4); cc(5); cc(5);