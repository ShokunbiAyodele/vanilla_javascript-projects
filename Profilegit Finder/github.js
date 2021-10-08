class Github{
  constructor(){
    this.client_id = '72bc834c5e3cb413d20a';
    this.clientSecret_key = '91b5e842b4fa70df864465fea65015d306937d00';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&secret_key=${this.clientSecret_key}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&secret_key=${this.clientSecret_key}`);


    const profileData = await profileResponse.json();

    const repoData = await repoResponse.json();


    return {
      profile : profileData,
      repos : repoData
    }
  }
}