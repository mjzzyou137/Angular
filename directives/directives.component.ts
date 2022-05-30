import { Component, OnInit } from "@angular/core";

interface User {
  name: string;
  email: string;
  status: UserStatus;
}

interface Chair {
  name: string;
  status: ChairStatus;
}

// Dạng liệt kệ
enum UserStatus {
  Active = "Active",
  Inactive = "Inactive",
  Pending = "Pending",
}

enum ChairStatus {
  Booked = "Booked",
  Available = "Available",
  Booking = "Booking",
}

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"],
})
export class DirectivesComponent implements OnInit {
  isLogin: boolean = false;
  users: User[] = [
    {
      name: "Man",
      email: "man@gmail.com",
      status: UserStatus.Active,
    },
    {
      name: "Truong",
      email: "truong@gmail.com",
      status: UserStatus.Inactive,
    },
    {
      name: "Khai",
      email: "khai@gmail.com",
      status: UserStatus.Pending,
    },
  ];

  status = UserStatus;

  chairs: Chair[] = [
    { name: "01", status: ChairStatus.Booked },
    { name: "02", status: ChairStatus.Available },
    { name: "03", status: ChairStatus.Booking },
    { name: "04", status: ChairStatus.Available },
  ];

  chairStatus = ChairStatus;

  currentStyle = {
    background: "red",
    color: "white",
  };

  constructor() {}

  ngOnInit(): void {}

  changeChairStatus(chair: Chair) {
    const index = this.chairs.findIndex((ele) => {
      return ele.name === chair.name;
    });

    if (index !== -1) {
      if (chair.status === ChairStatus.Available) {
        this.chairs[index].status = ChairStatus.Booking;
      } else {
        this.chairs[index].status = ChairStatus.Available;
      }
    }
  }
}
