import React, { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

function UserList() {
  // 1. Mảng user mẫu
  const users: User[] = [
    { id: 1, name: "Huyền", age: 17 },
    { id: 2, name: "Nam", age: 20 },
    { id: 3, name: "Linh", age: 22 },
    { id: 4, name: "An", age: 15 },
    { id: 5, name: "Trang", age: 19 },
  ];

  // 2. Dùng useMemo để lọc chỉ những user có tuổi > 18
  const filteredUsers = useMemo(() => {
    console.log("Đang lọc danh sách...");
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div >
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul >
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
