<script>
  import { onMount } from "svelte";

  let data1 = [
    { id: 1, name: "Company A", description: "Description of Company A" },
    { id: 2, name: "Company B", description: "Description of Company B" },
    { id: 3, name: "Company C", description: "Description of Company C" },
  ];

  let selectedCard;
  let data2 = [];

  let searchInput = "";
  let filteredData1 = [...data1];
  let expanded = false;

  let searchInput2 = "";
  let filteredData2 = [...data2];

  function selectCard(card) {
    selectedCard = card;

    if (card.id === 1) {
      data2 = [
        { id: 1, name: "Car Model 1" },
        { id: 2, name: "Car Model 2" },
        { id: 3, name: "Car Model 3" },
      ];
    } else if (card.id === 2) {
      data2 = [
        { id: 4, name: "Car Model 4" },
        { id: 5, name: "Car Model 5" },
        { id: 6, name: "Car Model 6" },
      ];
    } else {
      data2 = [];
    }

    expanded = false;
    searchInput2 = "";
    filterData2();

    sessionStorage.setItem("selectedCard", JSON.stringify(selectedCard));
  }

  function filterData() {
    filteredData1 = data1.filter((card) =>
      card.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  function filterData2() {
    filteredData2 = data2.filter((item) =>
      item.name.toLowerCase().includes(searchInput2.toLowerCase())
    );
  }

  onMount(() => {
    const storedCard = sessionStorage.getItem("selectedCard");
    if (storedCard) {
      selectedCard = JSON.parse(storedCard);
    }

    filterData();
    filterData2();
  });

  function handleSearchInput(event) {
    searchInput = event.target.value;
    filterData();
  }

  function handleSearchInput2(event) {
    searchInput2 = event.target.value;
    filterData2();
  }

  function handleAddCard() {
    if (!searchInput) {
      return; 
    }

    const newCard = {
      id: data1.length + 1, 
      name: searchInput, 
      description: `Description of the ${searchInput}`,
    };

    data1 = [...data1, newCard];
    searchInput = "";
    filterData();
  }

  function handleAddItem() {
    if (!searchInput2) {
      return; 
    }

    const newItem = {
      id: data2.length + 1,
      name: searchInput2, 
    };

    data2 = [...data2, newItem];
    searchInput2 = "";
    filterData2();
  }

  function expandCard() {
    expanded = !expanded;
  }
</script>

<div class="container mx-auto flex justify-center">
  <div class="w-1/4 p-4">
    <input
      type="text"
      placeholder="Search"
      class="border border-gray-300 rounded px-2 py-1"
      value={searchInput}
      on:input={handleSearchInput}
    />
    <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2">Clear</button>

    {#each filteredData1 as card}
      <div
        class="card border border-gray-300 rounded p-2 my-2 cursor-pointer"
        on:click={() => selectCard(card)}
      >
        <h3 class="text-lg font-bold">{card.name}</h3>
        <p>{card.description}</p>
      </div>
    {/each}

    <button
      class="bg-green-500 text-white px-4 py-2 rounded mt-2"
      on:click={handleAddCard}>Add New Card</button
    >
  </div>

  <div class="flex-1 p-4 ml-40">
    <h2 class="text-xl font-bold mb-4">
      Selected Card: {selectedCard ? selectedCard.name : "None"}
    </h2>

    {#if selectedCard}
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        on:click={expandCard}
      >
        {expanded ? "Collapse" : "Expand"} Content
      </button>

      {#if expanded}
        <h3 class="text-lg font-bold mt-4">Nested Data (data2):</h3>
        <input
          type="text"
          placeholder="Search"
          class="border border-gray-300 rounded px-2 py-1"
          value={searchInput2}
          on:input={handleSearchInput2}
        />
        {#each filteredData2 as item}
          <div class="nested-item border border-gray-300 rounded p-2 my-2">
            <p>{item.name}</p>
          </div>
        {/each}
        <button
          class="bg-green-500 text-white px-4 py-2 rounded mt-2"
          on:click={handleAddItem}>Add New Item</button
        >
      {/if}
    {/if}
  </div>
</div>
