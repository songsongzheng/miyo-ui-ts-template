import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  // TODO: 根据 state 实际内容修改
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol('store_key');

export default createStore({
  strict: true,

  state: {
    // TODO: 根据实际内容修改
    count: 0
  },
  mutations: {
    increment(state) {
      state.count += 1;
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit('increment');
    }
  },
  modules: {
    /**
     * 模块可以在这里填写，也可以分多个文件，建议分多个文件
     */
    // moduleA: {
    //   namespaced: true,
    //   state: {},
    //   mutations: {},
    //   actions: {}
    // }
  }
});

/**
 * 定义自己的 `useStore` 组合式函数
 * 使用时，只需要引入该方法：
 *     import { useStore } from './store'
 *
 * 即可使用。
 *     setup() {
 *         const store = useStore();
 *         store.state.count // 类型为 number
 *     }
 */
export function useStore() {
  return baseUseStore(key);
}
// import { createStore } from 'vuex';

// export default createStore({
//   state: {
//     // TODO: 根据实际内容修改
//     count: 0
//   },
//   mutations: {
//     increment(state) {
//       state.count += 1;
//     }
//   },
//   actions: {
//     increment: ({ commit }) => {
//       commit('increment');
//     }
//   },
//   modules: {}
// });
