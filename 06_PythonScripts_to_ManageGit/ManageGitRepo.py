from github import Github

# using username and password
g = Github("username", "password")
org = g.get_organization('VRLAB-HSKL')

repo = org.create_repo("test_repo_from_python")