// Mock Backend API Service
// This simulates a Django backend for the e-commerce application

const API_BASE = ''; // For localStorage-based mock API

// Mock API delay to simulate network latency
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Store data in localStorage
const getStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Initialize mock data
export const initializeMockData = () => {
  // Initialize orders if not exists
  if (!localStorage.getItem('orders')) {
    setStorage('orders', []);
  }
  
  // Initialize users if not exists
  if (!localStorage.getItem('users')) {
    setStorage('users', [
      {
        id: 1,
        email: 'demo@example.com',
        password: 'demo123',
        name: 'Demo User',
        avatar: 'https://via.placeholder.com/150',
        addresses: [
          {
            id: 1,
            type: 'Home',
            address: '123 Main Street',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'United States',
            isDefault: true
          }
        ]
      }
    ]);
  }
  
  // Initialize wishlist if not exists
  if (!localStorage.getItem('wishlist')) {
    setStorage('wishlist', []);
  }
  
  // Initialize product reviews
  if (!localStorage.getItem('reviews')) {
    setStorage('reviews', []);
  }
};

// Products API
export const productsApi = {
  getAll: async () => {
    await delay(300);
    return getStorage('products') || [];
  },
  
  getById: async (id) => {
    await delay(200);
    const products = getStorage('products') || [];
    return products.find(p => p.id === parseInt(id));
  },
  
  getByCategory: async (category) => {
    await delay(300);
    const products = getStorage('products') || [];
    return products.filter(p => p.category === category);
  },
  
  search: async (query) => {
    await delay(300);
    const products = getStorage('products') || [];
    return products.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// Orders API
export const ordersApi = {
  getAll: async () => {
    await delay(300);
    return getStorage('orders') || [];
  },
  
  getById: async (id) => {
    await delay(200);
    const orders = getStorage('orders') || [];
    return orders.find(o => o.id === id);
  },
  
  create: async (orderData) => {
    await delay(500);
    const orders = getStorage('orders') || [];
    const newOrder = {
      id: 'ORD-' + Date.now(),
      date: new Date().toISOString(),
      ...orderData,
      status: 'Processing'
    };
    orders.push(newOrder);
    setStorage('orders', orders);
    return newOrder;
  },
  
  updateStatus: async (id, status) => {
    await delay(300);
    const orders = getStorage('orders') || [];
    const index = orders.findIndex(o => o.id === id);
    if (index !== -1) {
      orders[index].status = status;
      setStorage('orders', orders);
      return orders[index];
    }
    return null;
  }
};

// Users API
export const usersApi = {
  login: async (email, password) => {
    await delay(500);
    const users = getStorage('users') || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return { success: true, user: userWithoutPassword };
    }
    return { success: false, message: 'Invalid email or password' };
  },
  
  register: async (userData) => {
    await delay(500);
    const users = getStorage('users') || [];
    
    // Check if email already exists
    if (users.find(u => u.email === userData.email)) {
      return { success: false, message: 'Email already exists' };
    }
    
    const newUser = {
      id: users.length + 1,
      ...userData,
      avatar: 'https://via.placeholder.com/150',
      addresses: [],
      wishlist: []
    };
    
    users.push(newUser);
    setStorage('users', users);
    
    const { password, ...userWithoutPassword } = newUser;
    return { success: true, user: userWithoutPassword };
  },
  
  updateProfile: async (userId, userData) => {
    await delay(300);
    const users = getStorage('users') || [];
    const index = users.findIndex(u => u.id === userId);
    
    if (index !== -1) {
      users[index] = { ...users[index], ...userData };
      setStorage('users', users);
      const { password, ...userWithoutPassword } = users[index];
      return { success: true, user: userWithoutPassword };
    }
    return { success: false, message: 'User not found' };
  },
  
  addAddress: async (userId, address) => {
    await delay(300);
    const users = getStorage('users') || [];
    const index = users.findIndex(u => u.id === userId);
    
    if (index !== -1) {
      const newAddress = {
        id: Date.now(),
        ...address
      };
      users[index].addresses.push(newAddress);
      setStorage('users', users);
      return { success: true, address: newAddress };
    }
    return { success: false, message: 'User not found' };
  }
};

// Wishlist API
export const wishlistApi = {
  getAll: async () => {
    await delay(200);
    return getStorage('wishlist') || [];
  },
  
  add: async (productId) => {
    await delay(200);
    const wishlist = getStorage('wishlist') || [];
    if (!wishlist.includes(productId)) {
      wishlist.push(productId);
      setStorage('wishlist', wishlist);
    }
    return wishlist;
  },
  
  remove: async (productId) => {
    await delay(200);
    let wishlist = getStorage('wishlist') || [];
    wishlist = wishlist.filter(id => id !== productId);
    setStorage('wishlist', wishlist);
    return wishlist;
  }
};

// Reviews API
export const reviewsApi = {
  getByProduct: async (productId) => {
    await delay(200);
    const reviews = getStorage('reviews') || [];
    return reviews.filter(r => r.productId === productId);
  },
  
  add: async (reviewData) => {
    await delay(300);
    const reviews = getStorage('reviews') || [];
    const newReview = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...reviewData
    };
    reviews.push(newReview);
    setStorage('reviews', reviews);
    return newReview;
  }
};

// Categories API
export const categoriesApi = {
  getAll: async () => {
    await delay(200);
    return [
      { id: 1, name: 'Groceries', slug: 'groceries', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400' },
      { id: 2, name: 'Fashion', slug: 'fashion', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400' },
      { id: 3, name: 'Electronics', slug: 'electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400' },
      { id: 4, name: 'Vegetables', slug: 'vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' },
      { id: 5, name: 'Fruits', slug: 'fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400' },
      { id: 6, name: 'Dairy', slug: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400' }
    ];
  }
};

// Initialize data on import
initializeMockData();

export default {
  products: productsApi,
  orders: ordersApi,
  users: usersApi,
  wishlist: wishlistApi,
  reviews: reviewsApi,
  categories: categoriesApi
};
