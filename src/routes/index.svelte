<script lang="ts">
  import { soundsList } from '$lib/sounds';
  import { isAsync } from '$lib/store';
  import { goto } from '$app/navigation';

  let nowPlaying = "None";
  function playAudio(sound) {
    if (!$isAsync && nowPlaying !== "None") return;
    nowPlaying === "None" ? nowPlaying = sound.name : nowPlaying += `, ${sound.name}`;
    const audio = new Audio(`/sounds/${sound.file}`);
    audio['name'] = sound.name;
    audio.play()
    audio.addEventListener('ended', (evt) => {
      let name = evt['path'][0].name;
      let npArr = nowPlaying.split(', ');
      if (npArr.length > 1) {
        npArr.splice(npArr.indexOf(name), 1);
        nowPlaying = npArr.join(', ');
      } else {
        nowPlaying = "None";
      }
    });
  }
</script>

<div class="grid min-h-screen place-items-center dark:bg-black">
  <div class='flex flex-col w-full h-full justify-center items-center gap-6'>
    <div class='flex flex-col gap-2 justify-center items-center'>
      <h1 class='md:text-7xl text-5xl text-orange-500 dark:text-white'>
        Sound<span class='text-purple-500 font-semibold'>Nep</span>
      </h1>
      <p class='dark:text-white'>
        🎶 Now Playing: {nowPlaying}
      </p>
    </div>
    <div class='flex gap-4 justify-center items-center flex-wrap max-w-2xl'>
      {#each soundsList as sound}
        <button class='{nowPlaying !== sound.name ? "bg-purple-500" : "bg-green-500"} shadow-lg text-white px-4 py-2 rounded-lg hover:bg-purple-600 active:scale-90' on:click={() => playAudio(sound)}>
          {sound.name}
        </button>
      {/each}
    </div>
    <div class='flex flex-row justify-center items-center gap-4'>
      <button class='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-90' on:click={() => playAudio(soundsList[Math.floor(Math.random() * soundsList.length)])}>
        Random
      </button>
      <button class='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-90' on:click={() => $isAsync = !$isAsync}>
        {$isAsync ? "Asynchronous" : "Synchronous"}
      </button>
    </div>
  </div>
</div>