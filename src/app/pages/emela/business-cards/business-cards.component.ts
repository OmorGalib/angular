import { Component } from '@angular/core';

@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.scss'],
})
export class BusinessCardsComponent {
  cardsData: any = [
    {
      image: 'https://www.makelots.com/wp-content/uploads/2024/01/4.jpg',
      name: 'Payment Gateway',
    },
    {
      image: 'https://www.makelots.com/wp-content/uploads/2024/01/5.jpg',
      name: 'Dedicated Support',
    },
    {
      image: 'https://www.makelots.com/wp-content/uploads/2024/01/1.jpg',
      name: 'Website Maintenance',
    },
    {
      image: 'https://www.makelots.com/wp-content/uploads/2024/01/3.jpg',
      name: 'Website Maintenance',
    },
    {
      image: 'https://www.makelots.com/wp-content/uploads/2024/01/2.jpg',
      name: 'Terms of Service Agreements',
    },
  ];
  cart: any = [
    { productName: 'Laptop', price: 45000, quantity: 2 },
    { productName: 'Mouse', price: 500, quantity: 3 },
    { productName: 'Keyboard', price: 1500, quantity: 4 },
    { productName: 'Monitor', price: 15000, quantity: 7 },
  ];
  totalCost = 0;

  constructor() {
    this.calculateTotalCost();
    this.allCost();
  }

  allCost() {
    let filtered = this.cart.map((item: any) => {
      return {
        ...item,
        ...{
          totalPrice: item.price * item.quantity,
        },
      }
    })

    console.log('', filtered);
  }

  calculateTotalCost() {
    this.cart.forEach((item: any) => {
      if (item.price <= 20000) {
        this.totalCost += item.price;
      }
    });
    console.log('Total cost of shopping (within budget):', this.totalCost);
  }
}
