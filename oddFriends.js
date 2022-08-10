function oddFriends(FriendArray){
   // let oddFriend = 1;
    for(let i = 0; i < FriendArray.length; i++){
       
      if (FriendArray[i].length % 2 != 0 ){
         return FriendArray[i];
           
        }
    }
}

const FriendArray =['rohima', 'situ', 'rohima', 'firoja','alhaj','priya','ali'];
console.log(oddFriends(FriendArray));