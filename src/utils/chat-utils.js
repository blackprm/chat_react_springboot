export const getRoomNtReadNum = chatList => {
  let i = 0;
  let count = 0;
  for (i = 0; i < chatList.length; i++) {
    const chat = chatList[i];
    if (chat.isRead === 0) {
      count++;
    }
  }
  return count;
};

export const getRoomByFromTo = (from, to, rooms) => {
  let i = 0;
  for (i = 0; i < rooms.length; i++) {
    if (
      (rooms[i].fkUser1 == from && rooms[i].fkUser2 == to) ||
      (rooms[i].fkUser2 == from && rooms[i].fkUser1 == to)
    ) {
      return rooms[i];
    }
  }
  return [];
};
