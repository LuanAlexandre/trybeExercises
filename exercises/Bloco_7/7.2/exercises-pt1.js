const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const delivery = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const houseNumber = order.address.number;
  const apartmentNumber = order.address.apartment;

  console.log(`Olá ${delivery}, entrega para: ${name}, Telefone: ${phone}, R. ${street}, Nº: ${houseNumber}, AP: ${apartmentNumber}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);