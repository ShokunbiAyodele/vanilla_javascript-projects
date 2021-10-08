//local Storage CTRL
const StorageCtrl = (function(){

  //public access
  return {
    storeItemLS : function(item){
      let items;
      //check if any item is in the LS
      if(localStorage.getItem('items') === null){
        items = [];
        //push items
        items.push(item);
        //set new items
        localStorage.setItem('items', JSON.stringify(items))
      }
      else{
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);

        //reset the item
        localStorage.setItem('items', JSON.stringify(items))
      }

    },
    getItemFromLS :function(){
      let items;
      //check if any item exitst in the LS
      if(localStorage.getItem('items') === null){
        items = [];
      }
      else{
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemLocalStorage: function(updateItem){
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item,index) => {
        if(updateItem.id === item.id){
          items.splice(index, 1, updateItem);
        }
      })
       //reset the item
       localStorage.setItem('items', JSON.stringify(items));
    },
    deleItemFromLS: function(id){
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item,index) => {
        if(id === item.id){
          items.splice(index, 1);
        }
      })
       //reset the item
       localStorage.setItem('items', JSON.stringify(items));

    },

    clearItemFromLS: function(){
      localStorage.removeItem('items');
    }
  }

})();

//Item controller
const ItemCtrl = (function(){

  const Item = function(id,name, calories){

    this.name = name;
    this.id = id;
    this.calories = calories;
  }

  //data structure and state

  const data = {
    // items : [
    //   // {id : 0 , name : 'Rice', calories : 1200},
    //   // {id : 1 , name : 'Eggs', calories : 2000},
    //   // {id : 2 , name : 'Beans', calories : 1500}
    // ],
    items : StorageCtrl.getItemFromLS(),
    currentItem : null,
    totalCalories : 0
  }
  

  return {
    getItem : function(){
      return data.items;

    },
     addItem: function(name,calories){
      // console.log(name,calories);

      //create ID
      let ID;
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      }
      else{
        ID = 0;
      }

      //convert calories to int
      calories = parseInt(calories);

      //create new items
      newItem = new Item(ID,name,calories);

      //add to new item array
      data.items.push(newItem);
      return newItem
    },
    //get the get item to edit
    getItemById  : function(id){
      let found = null;
      //loop thru the item
      data.items.forEach(item => {
        if(item.id === id){
          found = item;
        }
      })
      return found;
    },

    //clear items here
    cleaAllItems : function(){
      data.items = [];
    },
    updateItem: function(name, calories){
      //convert calories to a number
      calories = parseInt(calories);

      let found = null;
      data.items.forEach(item => {
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      })
      return found;
    },

    deleteItem:function(id){
      //get ids
      const ids = data.items.map(function(item){

        return item.id;
      });
      //get index
      const index = ids.indexOf(id);

      //remove item
      data.items.splice(index, 1);
    },

    setCurrentItem : function(item){
      data.currentItem = item;
     
    },
    getCurrentItem : function(){
      return data.currentItem;
    },

    getTotalCalories : function(){
      let total = 0;

      //loop thru items to get each calories
      data.items.forEach(function(item){
        total += item.calories;
      });
      //set total calories to data structure
      data.totalCalories = total;

      return data.totalCalories;

    },

    logData : function(){
      return data.items;
    }
  }
})();



//UI controller
const UICtrl = (function(){

  const UISelector = {

    itemList : '#item-list',
    itemListAll : '#item-list li',
    addBtn       : '.add-btn',
    updateBtn       : '.update-btn',
    clearBtn       : '.clear-btn',
    deleteBtn       : '.delete-btn',
    backBtn       : '.back-btn',
    itemName : '#item-name',
    itemCalories : '#item-calories',
    totalCalories : '.total-calories'
  }


  //public method
  return {
    populateItemLists : function(Items){
      //loop thru with foreach'   
      let html = '';
      Items.forEach(item => {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories}</em>
        <a href="#" class="secondary-content">
          <i class="fa edit-item fa-pencil"></i>
        </a>
      </li>`;
      });
      //insert list item
      document.querySelector(UISelector.itemList).innerHTML = html;
    },
    getItemInput: function(){
      
      return{
        name : document.querySelector(UISelector.itemName).value,
        calories : document.querySelector(UISelector.itemCalories).value
      }
      
    },
    addListItem: function(item){
      document.querySelector(UISelector.itemList).style.display = 'block';
      //create list item
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML =`<strong>${item.name}: </strong> <em>${item.calories}</em>
      <a href="#" class="secondary-content">
        <i class="fa edit-item fa-pencil"></i>
      </a>`;
      //insert item
      document.querySelector(UISelector.itemList).insertAdjacentElement('beforeend',li);
  
    },

    removeItem:function(){
      let listItems = document.querySelectorAll(UISelector.itemListAll);

      //convert node list to array
      listItems = Array.from(listItems);

      listItems.forEach(item => {
        item.remove();
      })
    },

    updateListItem : function(item){
      //get all the lis
      const listItem = document.querySelectorAll(UISelector.itemListAll);

      //convert from node to an array
      listItemArr = Array.from(listItem);

      listItemArr.forEach(itemList => {
        const itemID = itemList.getAttribute('id');
        if(itemID === `item-${item.id}`){
          document.querySelector(`#${itemID}`).innerHTML = `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories}</em>
          <a href="#" class="secondary-content">
            <i class="fa edit-item fa-pencil"></i>
          </a>
        </li>`;
        }

      })


    },
    deleteListItem: function(id){
     const itemID = `#item-${id}`;
      document.querySelector(itemID).remove();
    },
    clearInput : function(){
      document.querySelector(UISelector.itemName).value ='';
      document.querySelector(UISelector.itemCalories).value ='';
    },
    //add current item to form here
    addCurrentItemToForm : function(){
      document.querySelector(UISelector.itemName).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelector.itemCalories).value =ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    hideList : function(){
      document.querySelector(UISelector.itemList).style.display = 'none';

    },
      //show edit state btn
      showEditState : function(){
        document.querySelector(UISelector.updateBtn).style.display = 'inline';
      document.querySelector(UISelector.deleteBtn).style.display = 'inline';
      document.querySelector(UISelector.backBtn).style.display = 'inline';
      document.querySelector(UISelector.addBtn).style.display = 'none';
      },

    clearEditState : function(){
      UICtrl.clearInput();
      document.querySelector(UISelector.updateBtn).style.display = 'none';
      document.querySelector(UISelector.deleteBtn).style.display = 'none';
      document.querySelector(UISelector.backBtn).style.display = 'none';
      document.querySelector(UISelector.addBtn).style.display = 'inline';
    },

    showTotalCalories: function(totalCalories){
      document.querySelector(UISelector.totalCalories).textContent =totalCalories;
    },
    
    getSelectors : function(){
      return UISelector;
    }, 
  }

 
 })();

//APP controller
const App = (function(ItemCtrl, UICtrl,StorageCtrl){

  //load event listeners
  const loadEventListeners = function(){

    UISelector = UICtrl.getSelectors();
    
    //load a click event
    document.querySelector(UISelector.addBtn).addEventListener('click',itemAddSubmit);

     //back button event
     document.querySelector(UISelector.backBtn).addEventListener('click',UICtrl.clearEditState);

      //delete button event 
      document.querySelector(UISelector.deleteBtn).addEventListener('click',deleteSubmitBtn);

    //disable submit on enter
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault()
        return false;
      }
    })

    //load a click event for item edit
    document.querySelector(UISelector.itemList).addEventListener('click',itemEditClick);

    //load event for item update
    document.querySelector(UISelector.updateBtn).addEventListener('click',itemUpdateClick);

    //clear button for all item
    document.querySelector(UISelector.clearBtn).addEventListener('click',ClearAllItemClick);
   }
    //load itemAddSubmit
    const itemAddSubmit = function(e){
      //get item input from UI controller
      const input = UICtrl.getItemInput();

      //check for name and calories input
      if(input.name != '' &&  input.calories != ''){

        //add item to the item controller
        const newItem = ItemCtrl.addItem(input.name, input.calories);
        UICtrl.addListItem(newItem);

        //store in local storage
        StorageCtrl.storeItemLS(newItem);

        //add total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //pass total calories to the UI
        UICtrl.showTotalCalories(totalCalories);

        //clear input
        UICtrl.clearInput();
      }
      e.preventDefault();
    }

    //load updated item here
    const itemEditClick = function(e){
      if(e.target.classList.contains('edit-item')){
        //get the items id (item-0 item-1)
        const listId = e.target.parentNode.parentNode.id;
        //break into array by split
        const listIdArr = listId.split('-')
        //get the actual id in the array
        const id = parseInt(listIdArr[1]);

        //get the item
        itemToEdit =  ItemCtrl.getItemById(id);
        
        
        //set current item
        ItemCtrl.setCurrentItem(itemToEdit);

        //set current Item to form
        UICtrl.addCurrentItemToForm();

      }

      e.preventDefault();
    }

    //delete submit function
    const deleteSubmitBtn = function(e){

      //get current item
      const currentItem = ItemCtrl.getCurrentItem();
  
      //delete from data structure
      ItemCtrl.deleteItem(currentItem.id);

      //delete from UI
      UICtrl.deleteListItem(currentItem.id);

      //delete item from LS
      StorageCtrl.deleItemFromLS(currentItem.id);

         //add total calories
         const totalCalories = ItemCtrl.getTotalCalories();
         //pass total calories to the UI
         UICtrl.showTotalCalories(totalCalories);
  
         UICtrl.clearEditState();
      
      e.preventDefault()

    }
    const itemUpdateClick = function(e){
      //get item input

      const input = UICtrl.getItemInput();

      //update item
      const updateItem = ItemCtrl.updateItem(input.name, input.calories);

      //update item in the local storage
      StorageCtrl.updateItemLocalStorage(updateItem);

      //update the UI
      UICtrl.updateListItem(updateItem);

       //add total calories
       const totalCalories = ItemCtrl.getTotalCalories();
       //pass total calories to the UI
       UICtrl.showTotalCalories(totalCalories);

       UICtrl.clearEditState();
      

      e.preventDefault();
    }
    //clear item event
    ClearAllItemClick = function(){
      //delete all items from data structure
      ItemCtrl.cleaAllItems();
        //add total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //pass total calories to the UI
        UICtrl.showTotalCalories(totalCalories);

      //remove item from UI
      UICtrl.removeItem();

      //clear all item from Local storage
      StorageCtrl.clearItemFromLS();


    }

  return {
    init : function(){
      //clear edit state /set initial set
      UICtrl.clearEditState();

      //fect Items from data structure
      const Items = ItemCtrl.getItem();

      
      //check if any item
      if(Items.length === 0){
        UICtrl.hideList();
      }
      else{
     //populate the LIST ITEMS
      UICtrl.populateItemLists(Items)
      }
       //add total calories
       const totalCalories = ItemCtrl.getTotalCalories();
       //pass total calories to the UI
       UICtrl.showTotalCalories(totalCalories);
       
      loadEventListeners();
    }
  };
})(ItemCtrl,UICtrl,StorageCtrl);


App.init();