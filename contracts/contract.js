import BywiseUtils, { StorageValue } from 'bywise-utils.js';

class StorageContract {

    value = new StorageValue('');

    setValue(newValue) {
        this.value.set(newValue);
    }

    getValue() { // @view
        return this.value.get();
    }
}

BywiseUtils.exportContract(new StorageContract());