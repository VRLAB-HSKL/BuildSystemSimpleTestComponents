from decouple import config
from github import Github

API_KEY = config('KEY')

g = Github(API_KEY)

orga = g.get_organization('VRLAB-HSKL')

for repo in orga.get_repos() : print(repo.name)

repo = orga.create_repo("test_repo_from_python")

#for repo in g.get_user().get_repos() : print(repo.name)

