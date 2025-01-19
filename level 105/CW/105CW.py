def domain_name(url):
    url = url.replace("http://", "").replace("https://", "").replace("www.", "")
    domain = url.split('.')[0]
    
    return domain
