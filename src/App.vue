<template>
  <div>
    <nav>
      <RouterLink to = "/">Home</RouterLink> |
      <RouterLink to = "/about">About</RouterLink> |
      <RouterLink to = "/contact">Contact</RouterLink> |
      <RouterLink to = "/registration">Registration Form</RouterLink>
    </nav>
    <br>
    <RouterView />
  </div>
</template>