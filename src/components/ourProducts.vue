<template>
  <div class="container col-10 third mt-4">
    <h2 class="mb-4">Каталог товаров</h2>

    <!-- Сетка товаров -->
    <div class="row">
      <div 
        v-for="product in displayedProducts" 
        :key="product.id" 
        class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card product-card h-100" @mouseenter="addClass(product.id)" @mouseleave="clearClass(product.id)">
          <img 
            :src="product.image" 
            class="card-img-top" 
            :alt="product.name"
            style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text text-muted small flex-grow-1">
              {{ product.description }}
            </p>
            
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="h5 mb-0">{{ product.price.toLocaleString() }} ₽</span>
            </div>
          </div>

          <div :id="`card-${product.id}`" class="d-flex align-items-center justify-content-center disappeared" style="position:absolute; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); border-radius: 5px;">
              <button
                style="background-color: white; color: #5E5E63; border-radius: 2px; height: 50px;"
                class="btn w-75">
                <i class="bi bi-cart-plus me-2"></i>
                В корзину
              </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Пагинация -->
    <nav v-if="totalPages > 1" aria-label="Навигация по страницам">
      <ul class="pagination justify-content-center align-items-center gap-3 mt-3">
        <li :class="{ disabled: currentPage === 1 }">
          <button  
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1">
            <i class="bi bi-chevron-left"></i>
          </button>
        </li>
        
        <li 
          v-for="page in visiblePages" 
          :key="page" 
          :class="{ active: page === currentPage }">
          <button 
          :disabled="currentPage === page"
            style="height: 40px; width: 40px; border-radius: 50%;"
            @click="changePage(page)">
            {{ page }}
          </button>
        </li>

        <li :class="{ disabled: currentPage === totalPages }">
          <button
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === totalPages">
            <i class="bi bi-chevron-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ProductCatalog',
  data() {
    return {
      // Хардкодные данные товаров
      allProducts: [
        {
          id: 1,
          name: "Смартфон Samsung Galaxy S23",
          price: 79990,
          image: "/public/product.svg",
          description: "Флагманский смартфон с лучшей камерой",
          inStock: true,
          rating: 4.8,
          category: "electronics"
        },
        {
          id: 2,
          name: "Ноутбук Apple MacBook Air M2",
          price: 129990,
          image: "/public/product.svg",
          description: "Мощный и легкий ноутбук для работы",
          inStock: true,
          rating: 4.9,
          category: "electronics"
        },
        {
          id: 3,
          name: "Наушники Sony WH-1000XM4",
          price: 29990,
          image: "/public/product.svg",
          description: "Беспроводные наушники с шумоподавлением",
          inStock: true,
          rating: 4.7,
          category: "electronics"
        },
        {
          id: 4,
          name: "Футболка хлопковая",
          price: 1990,
          image: "/public/product.svg",
          description: "Мужская футболка из 100% хлопка",
          inStock: true,
          rating: 4.3,
          category: "clothing"
        },
        {
          id: 5,
          name: "Кроссовки Nike Air Max",
          price: 8990,
          image: "/public/product.svg",
          description: "Спортивные кроссовки для бега",
          inStock: false,
          rating: 4.5,
          category: "shoes"
        },
        {
          id: 6,
          name: "Часы Apple Watch Series 8",
          price: 45990,
          image: "/public/product.svg",
          description: "Умные часы с функцией ECG",
          inStock: true,
          rating: 4.6,
          category: "electronics"
        },
        {
          id: 7,
          name: "Книга 'Война и мир'",
          price: 1290,
          image: "/public/product.svg",
          description: "Классика русской литературы",
          inStock: true,
          rating: 4.8,
          category: "books"
        },
        {
          id: 8,
          name: "Кофеварка DeLonghi",
          price: 24990,
          image: "/public/product.svg",
          description: "Автоматическая кофеварка для дома",
          inStock: true,
          rating: 4.4,
          category: "appliances"
        },
        {
          id: 9,
          name: "Рюкзак городской",
          price: 3490,
          image: "/public/product.svg",
          description: "Стильный рюкзак для повседневного использования",
          inStock: true,
          rating: 4.2,
          category: "accessories"
        },
        {
          id: 10,
          name: "Мышь игровая Razer",
          price: 5990,
          image: "/public/product.svg",
          description: "Высокоточная игровая мышь",
          inStock: true,
          rating: 4.7,
          category: "electronics"
        }
      ],
      // Реактивные данные
      currentPage: 1,
      itemsPerPage: 8,
      searchQuery: '',
      sortBy: 'name',
      sortOrder: 'asc',
      searchTimeout: null
    }
  },
  computed: {
    // Отфильтрованные товары
    filteredProducts() {
      let filtered = [...this.allProducts]

      // Поиск по названию и описанию
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        )
      }

      // Сортировка
      filtered.sort((a, b) => {
        let aValue = a[this.sortBy]
        let bValue = b[this.sortBy]

        if (this.sortBy === 'price') {
          aValue = Number(aValue)
          bValue = Number(bValue)
        }

        if (this.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })

      return filtered
    },
    
    // Товары для отображения на текущей странице
    displayedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredProducts.slice(start, end)
    },
    
    // Общее количество страниц
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage)
    },
    
    // С какого товара показываем
    showingFrom() {
      return (this.currentPage - 1) * this.itemsPerPage + 1
    },
    
    // По какой товар показываем
    showingTo() {
      const to = this.currentPage * this.itemsPerPage
      return to > this.filteredProducts.length ? this.filteredProducts.length : to
    },
    
    // Видимые страницы в пагинации
    visiblePages() {
      const pages = []
      const maxVisible = 5
      let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2))
      let end = Math.min(this.totalPages, start + maxVisible - 1)
      
      start = Math.max(1, end - maxVisible + 1)
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      return pages
    }
  },
  methods: {
    addClass(id){
      const elem = document.getElementById(`card-`+id);
      elem.classList.remove('disappeared')
    },
    clearClass(id){
      const elem = document.getElementById(`card-`+id);
      elem.classList.add('disappeared')
    },
    // Смена страницы
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
      let block = document.querySelector('.third')
      block.scrollIntoView({block: "start", behavior: "smooth"});
    },
    
    // Изменение количества товаров на странице
    changeItemsPerPage() {
      this.currentPage = 1
    },
    
    // Фильтрация товаров
    filterProducts() {
      this.currentPage = 1
    }
  },
  watch: {
    // Наблюдатель для сброса страницы при изменении фильтров
    sortBy() {
      this.currentPage = 1
    },
    sortOrder() {
      this.currentPage = 1
    }
  }
}
</script>

<style scoped>
button:disabled {
  background-color: #e0e0e0;
  color: #a0a0a0;
  cursor: not-allowed;
}
button{
  background-color: white; 
  color: #5E5E63; 
  border-radius: 20px; 
  height: 40px;
  width: 40px;
  border: none;
}
button:hover{
  border: 1px solid;
  background-color: #5E5E63;
  color: white;
  transform: scale(1.1);
}
.disappeared{
  display: none !important;
  transition: 0.5s;
}
.product-card {
  transition: all 0.3s ease;
  border: 1px solid #dee2e6;
}

.product-card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-color: #F8F5F3;
  transform: translateY(-5px);
}

.card-img-top {
  transition: transform 0.3s ease;
}

.btn:disabled {
  cursor: not-allowed;
}

.form-select {
  cursor: pointer;
}
</style>