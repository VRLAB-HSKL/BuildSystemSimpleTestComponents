using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
using UnityEngine.Networking;


public class RestClient
{
    public IEnumerator GetRequest(string url, Action<UnityWebRequest> callback)
    {
        using(UnityWebRequest request = UnityWebRequest.Get(url))
        {
            yield return request.SendWebRequest();
            callback(request);
        }
    }

    public IEnumerator PostRequest (string url, string data ,Action<UnityWebRequest> callback)
    {
        using (UnityWebRequest request = UnityWebRequest.Get(url+"?data="+data))
        {
            yield return request.SendWebRequest();
            callback(request);
        }
    }
}
