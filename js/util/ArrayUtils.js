import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default class ArrayUtils {
  static updateArray(array, item) {
    for (let i = 0; i < array.length; i++) {
      let temp = array[i];
      if (temp === item) {
        array.splice(i, 1);
        return;
      }
    }
    array.push(item);
  }

  static clone(from) {
    if (!from) {
      return [];
    }
    let newArray = [];
    for (let i = 0; i < from.length; i++) {
      newArray[i] = from[i];
    }
    return newArray;
  }

  static isEqual(arr1, arr2) {
    if (!(arr1 && arr2)) {
      return false;
    }
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  static remove(arr, item) {
    if (!arr) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        arr.splice(i, 1);
      }
    }
  }
}