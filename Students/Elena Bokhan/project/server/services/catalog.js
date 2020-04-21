module.exports={
	add(arr,item){	
		let id = parseInt(new Date().getTime() / 1000);
		item.id_product=id;
		arr.push(item);
		return {newCatalog:arr, idNew:id};
	}
}