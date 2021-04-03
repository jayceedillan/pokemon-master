<template>
  <div>
    <ul class="pagination pagination-lg justify-content-center pager">
      <li
        class="page-item"
        :class="[currentPage === 0 ? 'disabled' : '']"
        @click="setFirst()"
      >
        <a class="page-link">←</a>
      </li>
      <template>
        <template class="page-item" v-for="pageNumber in totalPages">
          <li v-if="limitButton(pageNumber)" :key="pageNumber">
            <a
              class="page-link"
              @click="setPage($event, pageNumber)"
              :class="{
                current: currentPage === pageNumber,
                last:
                  pageNumber == totalPages - 1 &&
                  Math.abs(pageNumber - currentPage) > 6,
                first:
                  pageNumber == 0 &&
                  Math.abs(pageNumber - (currentPage + 1)) > 6,
              }"
            >
              {{ pageNumber }}</a
            >
          </li>
        </template>
      </template>
      <li
        class="page-item"
        :class="[currentPage === totalPages ? 'disabled' : '']"
        @click="setLast()"
      >
        <a class="page-link">→</a>
      </li>
      <!-- {{
        totalPerpage
      }}
      <li class="page-item">
        <a class="page-link" href="#">Previous</a>
      </li>
      <li class="page-item" v-for="page in totalPerpage" :key="page">
        <a class="page-link" href="#">{{ page }}</a>
      </li>

      <li class="page-item"><a class="page-link" href="#">Next</a></li> -->
    </ul>
  </div>
</template>

<style lang="scss" src="./Pagination.scss" ></style>
<script lang="ts" src="./Pagination.ts"></script>